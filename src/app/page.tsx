import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

// const mockUrls = [
//   "https://utfs.io/f/d2b7309a-f02b-46a3-a995-07da4bd70598-sura7a.jpg",
//   "https://utfs.io/f/b88252da-9811-4615-9b53-e49ad133ee8f-susitd.jpg",
//   "https://utfs.io/f/8272a767-6bea-4109-ba2a-24cf58f97dd3-sut2qj.jpg",
//   "https://utfs.io/f/18b1e28d-582b-4924-94c6-f254cf6d71b7-p6gmdr.jpg",
//   "https://utfs.io/f/ca7b2deb-6a0b-4150-958a-eebe84500e7f-sur9o9.jpg",
//   "https://utfs.io/f/58b6a0eb-4493-4590-8400-59bffe45232d-sur4gk.jpg",
//   "https://utfs.io/f/47910e32-8927-4ca9-a7a7-e2aa360772c9-sura7b.jpg",
//   "https://utfs.io/f/fdbbfdbc-56b5-445d-ae44-d12aafe03fbc-rhe4w2.jpg",
//   "https://utfs.io/f/6baebba6-f9c8-45c5-87ea-2dc99b22c3aa-rooawm.jpg",
//   "https://utfs.io/f/d4d00b35-48ff-4887-90e8-707aaefa7183-sur804.jpg",
//   "https://utfs.io/f/0fd98ce6-fb86-4923-a3ff-1b62b4d1ec00-76fmlh.jpg",
//   "https://utfs.io/f/62170128-3c7e-434d-9a95-b775bdce85f0-9a1x03.jpg",
// ];

// const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const images = await db.query.images.findMany();
  console.log("images", images);
  return (
    <main className="mx-auto px-10">
      <div className="flex flex-wrap gap-4">
        {[...images].map((image) => (
          <div key={image.id} className="w-48">
            <img className="h-full object-cover" src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
