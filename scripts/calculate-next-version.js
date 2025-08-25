#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * 다음 버전 계산 및 .version/next-release.json 업데이트
 */
async function calculateNextVersion() {
  try {
    console.log('🔍 Analyzing commits for version recommendation...');
    
    // 현재 버전 가져오기
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const currentVersion = packageJson.version;
    console.log(`📦 Current version: ${currentVersion}`);
    
    // 마지막 릴리즈 태그 찾기
    let lastTag;
    try {
      lastTag = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
      console.log(`🏷️ Last release tag: ${lastTag}`);
    } catch (error) {
      console.log('📝 No previous tags found, analyzing all commits');
      lastTag = '';
    }
    
    // develop 브랜치의 커밋만 분석하도록 수정
    let recommendedType = 'none';
    try {
      // develop 브랜치로 체크아웃하지 않고 develop의 커밋들만 분석
      const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
      
      if (currentBranch === 'develop') {
        // develop 브랜치에서 실행 시에만 분석
        recommendedType = execSync('npx conventional-recommended-bump -p angular', { 
          encoding: 'utf8',
          cwd: process.cwd()
        }).trim();
        console.log(`📊 Recommended release type: ${recommendedType}`);
      } else {
        console.log(`📝 Current branch is ${currentBranch}, not develop. No version calculation needed.`);
      }
    } catch (error) {
      console.log('📝 No conventional commits found or not on develop branch, defaulting to none');
    }
    
    // 버전 계산
    const [major, minor, patch] = currentVersion.split('.').map(Number);
    let nextVersion;
    let changeType = recommendedType;
    
    switch (recommendedType) {
      case 'major':
        nextVersion = `${major + 1}.0.0`;
        break;
      case 'minor':
        nextVersion = `${major}.${minor + 1}.0`;
        break;
      case 'patch':
        nextVersion = `${major}.${minor}.${patch + 1}`;
        break;
      default:
        nextVersion = currentVersion;
        changeType = 'none';
        console.log('📝 No version change needed');
    }
    
    console.log(`🚀 Next version: ${nextVersion}`);
    
    // 커밋 분석 (상세 정보)
    let commits = '';
    try {
      if (lastTag) {
        commits = execSync(`git log ${lastTag}..HEAD --pretty=format:"%s"`, { encoding: 'utf8' });
      } else {
        commits = execSync('git log --pretty=format:"%s"', { encoding: 'utf8' });
      }
    } catch (error) {
      console.log('⚠️ Could not fetch commits');
    }
    
    const commitLines = commits.split('\n').filter(line => line.trim());
    const changes = {
      major: false,
      minor: false,
      patch: false
    };
    
    // 커밋 분석 (간단한 패턴 매칭)
    commitLines.forEach(commit => {
      if (commit.includes('BREAKING CHANGE') || commit.startsWith('feat!:') || commit.startsWith('fix!:')) {
        changes.major = true;
      } else if (commit.startsWith('feat:')) {
        changes.minor = true;
      } else if (commit.startsWith('fix:')) {
        changes.patch = true;
      }
    });
    
    // .version/next-release.json 업데이트
    const versionDir = '.version';
    if (!fs.existsSync(versionDir)) {
      fs.mkdirSync(versionDir, { recursive: true });
    }
    
    const versionInfo = {
      current: currentVersion,
      next: nextVersion,
      changeType: changeType,
      updatedAt: new Date().toISOString(),
      changes: changes,
      recommendation: {
        releaseType: recommendedType,
        reason: 'Calculated using conventional-recommended-bump'
      }
    };
    
    fs.writeFileSync(
      path.join(versionDir, 'next-release.json'),
      JSON.stringify(versionInfo, null, 2)
    );
    
    console.log('✅ Version tracking file updated');
    console.log('📄 Content:', JSON.stringify(versionInfo, null, 2));
    
    return versionInfo;
    
  } catch (error) {
    console.error('❌ Error calculating next version:', error.message);
    process.exit(1);
  }
}

// 스크립트가 직접 실행될 때
if (require.main === module) {
  calculateNextVersion();
}

module.exports = { calculateNextVersion };
