import { useMemo, useState } from "react"

export default function App() {
  const nav = useMemo(
    () => [
      { label: "トップ", href: "#top" },
      { label: "骨格ベクトレーニングとは", href: "#about" },
      { label: "お悩み", href: "#concerns" },
      { label: "体験の流れ", href: "#flow" },
      { label: "よくある質問", href: "#faq" },
      { label: "予約", href: "#contact" },
    ],
    []
  )

  const concerns = useMemo(
    () => [
      "慢性的な肩こり・首の痛み",
      "腰痛が繰り返す",
      "猫背や反り腰が気になる",
      "膝や足首の痛み",
      "疲れやすい・身体が重い",
      "スポーツのパフォーマンスを上げたい",
    ],
    []
  )

  const flow = useMemo(
    () => [
      {
        step: "01",
        title: "カウンセリング・評価",
        text: "お悩みと目的を伺い，姿勢・動作を評価します．",
      },
      {
        step: "02",
        title: "原因の整理・方針決定",
        text: "骨格の軸・重心・可動性を整理し，改善ステップの方向性を決めます．",
      },
      {
        step: "03",
        title: "トレーニング／調整",
        text: "あなたに合った最短ルートで，動きのクセを整えます．",
      },
      {
        step: "04",
        title: "セルフケア提案",
        text: "再発しにくい身体づくりのため，自宅でできるメニューも提案します．",
      },
    ],
    []
  )

  const faqs = useMemo(
    () => [
      {
        q: "骨格ベクトレーニングとは何ですか？",
        a: "骨格（軸・重心・可動性）と動作ベクトル（力の方向）を評価し，根本から動きを整えるアプローチです．",
      },
      {
        q: "1回の所要時間はどのくらいですか？",
        a: "目安は90分です．",
      },
      {
        q: "どのくらいの頻度で通えばいいですか？",
        a: "最初は2〜4週に1回を目安に，状態に応じて調整します．",
      },
      {
        q: "痛みがある場合でも受けられますか？",
        a: "可能ですが，強い痛みやしびれがある場合は医療機関を優先してください．",
      },
      {
        q: "運動が苦手でも大丈夫ですか？",
        a: "大丈夫です．できる範囲で段階的に進めます．",
      },
      {
        q: "持ち物は何が必要ですか？",
        a: "動きやすい服装，タオル，水分があると安心です．",
      },
    ],
    []
  )

  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const heroUrl = "/hero.jpg"
  const boneUrl = "/bone.jpg"
  const instagramDmUrl =
    "https://www.instagram.com/natural_body_s?igsh=MWxsMzhvZ2JyeG50bw=="

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="leading-tight shrink-0">
            <div className="text-[11px] tracking-[0.25em] text-slate-500">
              POSTURE
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              骨格ベクトレーニング
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500">
              完全予約制・マンツーマン
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-slate-900 transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition shrink-0"
          >
            体験予約
          </a>
        </div>
      </header>

      <div className="h-[72px]" />

      {/* HERO */}
      <section id="top" className="relative">
        <div
          className="relative w-full min-h-[860px] md:min-h-[720px] bg-slate-900"
          style={{
            backgroundImage: `url('${heroUrl}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60" />

          {/* content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* left */}
              <div className="text-white pt-4">
                <span className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs">
                  完全予約制・マンツーマン
                </span>

                <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  骨格から整え，
                  <br />
                  本来の身体へ．
                </h1>

                <p className="mt-4 text-white/90 leading-relaxed max-w-xl text-sm sm:text-base">
                  姿勢・動作を評価し，あなたに合わせて最短ルートで整えるパーソナル指導．
                  痛み・不調の根本改善と，再発しにくい身体づくりへ．
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-auto">
                    <a
                      href="#contact"
                      className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 transition inline-flex justify-center w-full"
                    >
                      予約はこちら →
                    </a>
                    <p className="mt-2 text-xs text-white/80">
                      ※男性のお客様はご紹介の方のみです．
                    </p>
                  </div>

                  <a
                    href={instagramDmUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white/10 border border-white/30 text-white px-5 py-3 font-semibold hover:bg-white/15 transition inline-flex justify-center"
                  >
                    Instagram DMで相談
                  </a>
                </div>

                <p className="mt-4 text-xs text-white/75">所要時間90分</p>
              </div>

              {/* right card */}
              <div className="w-full max-w-md md:justify-self-end mt-4 md:mt-0">
                <div className="rounded-2xl bg-white/95 backdrop-blur p-5 shadow-xl border border-white/30">
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                      姿勢・動作の評価
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                      原因の整理・改善ステップ設計
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                      自宅でできるセルフケア提案
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex w-full justify-center rounded-xl bg-slate-900 text-white px-4 py-3 font-semibold hover:bg-slate-800 transition"
                  >
                    予約へ
                  </a>

                  <p className="mt-2 text-xs text-slate-500 text-center">
                    予約はInstagram DMでOK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-center min-h-[300px]">
                <img
                  src={boneUrl}
                  alt="骨格イメージ"
                  className="max-h-[420px] w-auto opacity-95 object-contain"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display =
                      "none"
                  }}
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-600">
                骨格ベクトレーニングとは
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                根本から動きを整える，
                <br />
                新しいアプローチ．
              </h2>

              <p className="mt-4 text-slate-700 leading-relaxed">
                筋肉だけでなく，骨格の軸・重心・可動性を評価し，
                身体の使い方そのものを最適化します．
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                痛みや不調の原因を明確にし，
                一時的ではなく長期的に整った身体づくりをサポートします．
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-slate-900 font-semibold hover:opacity-80"
              >
                体験予約へ →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONCERNS */}
      <section id="concerns" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              こんなお悩み，ありませんか？
            </h2>
            <p className="mt-3 text-slate-600">
              一つでも当てはまる方は，骨格から見直すタイミングです．
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {concerns.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 flex items-center gap-3"
              >
                <span className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center font-bold shrink-0">
                  ✓
                </span>
                <div className="font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            体験の流れ
          </h2>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {flow.map((f) => (
              <div
                key={f.step}
                className="rounded-2xl bg-white border border-slate-200 p-6"
              >
                <div className="text-xs tracking-widest text-slate-500">
                  STEP {f.step}
                </div>
                <div className="mt-2 text-lg font-bold">{f.title}</div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            よくある質問
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((f, i) => {
              const open = openIdx === i
              return (
                <div
                  key={f.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold pr-4">{f.q}</span>
                    <span>{open ? "−" : "+"}</span>
                  </button>

                  {open && (
                    <div className="px-5 pb-5 text-slate-700 leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-slate-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              体験予約・お問い合わせ
            </h2>

            <p className="mt-4 text-white/85 leading-relaxed">
              ご予約はInstagram DMからお願いします．
              「お名前」「お悩み」「希望日時（2〜3候補）」を送ってください．
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={instagramDmUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 transition text-center"
              >
                Instagram DMで予約する →
              </a>

              <a
                href="#top"
                className="rounded-xl bg-white/10 border border-white/25 px-5 py-3 font-semibold hover:bg-white/15 transition text-center"
              >
                トップに戻る
              </a>
            </div>

            <p className="mt-4 text-xs text-white/70 leading-relaxed">
              ※ 症状が強い場合は医療機関を優先してください．
              <br />
              ※ この施術は医療行為ではありません．
              <br />
              ※ 男性のお客様はご紹介の方のみです．
            </p>
          </div>

          <div className="rounded-2xl bg-white/8 border border-white/15 p-6">
            <div className="text-lg font-bold">送る内容テンプレ</div>

            <div className="mt-4 text-sm text-white/85 leading-relaxed whitespace-pre-wrap">
              {`① お名前：
② お悩み：
③ 希望日時（2〜3候補）：
④ 目的：`}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} POSTURE 骨格ベクトレーニング
      </footer>
    </div>
  )
}