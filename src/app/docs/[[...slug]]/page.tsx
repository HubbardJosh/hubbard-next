export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  switch (params.slug?.length) {
    case 1:
      return <h1>Viewing docs for feature {params.slug[0]}</h1>;

    case 2:
      return (
        <h1>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      );

    default:
      return <h1>Docs home page</h1>;
  }
}
