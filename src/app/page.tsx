import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Home Page - Create Next App",
  description: "Generated by create next app"
}

const Home = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold uppercase">Fulano de Tal</h1>
      <p className="mb-8 text-center text-gray-700">
        Backend Developer
      </p>
      <p className="mb-8 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`&apos`s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <div className="text-center">
        <ButtonLink href="/page/1" >Ir ao Blog</ButtonLink>
      </div>
    </>
  );
};

export default Home;
