import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-navy-900">
      <Container className="text-center">
        <div className="w-16 h-[3px] bg-gold-400 mx-auto mb-6" />
        <h1 className="font-heading text-7xl md:text-8xl font-bold text-gold-400 mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-slate-400 font-body text-lg max-w-md mx-auto mb-8">
          Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-400 text-navy-900 font-heading font-semibold rounded-lg hover:bg-gold-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Ana Sayfaya Dön
        </Link>
      </Container>
    </section>
  );
}
