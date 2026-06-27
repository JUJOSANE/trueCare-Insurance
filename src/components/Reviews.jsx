import { useLanguage } from "../context/LanguageContext";

function Reviews() {
  const { t } = useLanguage();
  return (
<section className="bg-white px-6 py-24 md:px-12 lg:px-24">
  <div className="mx-auto mb-16 max-w-4xl text-center">
    <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
      {t.reviews.tag}
    </span>

    <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
      {t.reviews.title}
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
      {t.reviews.text}
    </p>
  </div>

  <div className="mx-auto max-w-6xl">
        <iframe
          src="https://backend.leadconnectorhq.com/appengine/reviews/get_widget/iJpkqEQGhgo30VHuGE4L"
          title="True Care Insurance Reviews"
          className="h-[800px] w-full rounded-3xl border border-slate-200 shadow-lg"
        />
      </div>
</section>
    
  );
}

export default Reviews;
