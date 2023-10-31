export default function Footer() {
  return (
    <section className="grid gap-6 py-8 md:gap-8 md:py-12">
      <p>
        Visit the{" "}
        <a
          className="cursor-pointer underline underline-offset-4 transition-all hover:opacity-50"
          href="https://github.com/9d8dev/craft"
        >
          Github Repo
        </a>{" "}
        here.
      </p>
      <p className="text-sm">© Craft UI, 2023-Present</p>
    </section>
  );
}
