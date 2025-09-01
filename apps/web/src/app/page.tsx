import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* 로고 이미지 */}
        <div className="mb-8">
          <Image
            src="/images/BlurFin_Logo.png"
            alt="BlurFin Logo"
            width={200}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
        
        {/* 개발중 문구 */}
        <div className="text-gray-600">
          <h1 className="text-2xl font-semibold mb-2">Under Development</h1>
          <p className="text-lg">We're working hard to bring you something amazing.</p>
        </div>
      </div>
    </main>
  )
}
