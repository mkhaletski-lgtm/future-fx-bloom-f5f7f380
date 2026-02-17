import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from 'lucide-react';
import bookCover from '@/assets/book-cover.png';

export function BookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(0,191,166,0.06)_0%,_transparent_60%)]" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.img
              src={bookCover}
              alt="Книга Максима Халецкого - Форекс без иллюзий. Почему ручная торговля - тупик."
              className="max-w-[320px] w-full rounded-xl shadow-[0_20px_60px_rgba(0,150,137,0.3)]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right - Annotation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">
                Книга <span className="gradient-text">"Форекс без иллюзий: почему ручная торговля — тупик"</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-display">
                Максим Халецкий (основатель PROSSFX)
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Эта книга не про «грааль» и не про быстрые деньги. Она про реальный Форекс — таким, каким он становится на дистанции: с ошибками, сомнениями, усталостью и просадками.
              </p>
              <p>
                Автор торгует с 2006 года и честно показывает, почему большинство застревает, почему «стараться больше» не работает и как человеческий фактор превращается в главный риск.
              </p>
              <p>
                Это путь от ручной торговли к системе, где важны дисциплина, повторяемость и контроль.
              </p>
              <p>
                Книга не убеждает. Она заставляет задуматься, где именно вы зашли в тупик.
              </p>
            </div>

            <a
              href="https://ridero.ru/books/foreks_bez_illyuzii_pochemu_ruchnaya_torgovlya_tupik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-lg text-base font-semibold text-primary-foreground bg-menu hover:bg-menu/90 shadow-[0_4px_20px_hsl(174_100%_42%/0.4)] transition-all duration-300 btn-shine"
            >
              <Download className="w-5 h-5" />
              СКАЧАТЬ БЕСПЛАТНО
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
