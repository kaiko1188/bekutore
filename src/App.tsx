import { useMemo, useState } from "react"

// 文字ロゴで進める（画像ロゴ不要）
// Hero画像は「あなたが用意した画像」を assets/hero.jpg に置けば差し替わる（後述）
// 骨の画像は assets/bone.png に置けば表示（なければプレースホルダになる）

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
        text: "骨格の軸・重心・可動性を整理し，改善ステップの“方向性”を決めます．",
      },
      {
        step: "03",
        title: "トレーニング／調整",
        text: "あなたに合った最短ルートで，動きのクセを整えます．",
      },
      {
        step: "04",
        title: "セルフケア提案",
        text: "再発しにくい身体づくりのため，家でできるメニューもセットします．",
      },
    ],
    []
  )

  const faqs = useMemo(
    () => [
      {
        q: "骨格ベクトレーニングとは何ですか？",
        a: "骨格（軸・重心・可動性）と動作ベクトル（力の方向）を評価し，根本から動きを整えるアプローチです．身体の使い方やバランスを最適化し，痛みや不調の原因にアプローチします．",
      },
      {
        q: "1回の所要時間はどのくらいですか？",
        a: "目安は90分です",
      },
      {
        q: "どのくらいの頻度で通えばいいですか？",
        a: "最初は2〜4週に1回から始め，状態に合わせて間隔を調整するのが一般的です．",
      },
      {
        q: "痛みがある場合でも受けられますか？",
        a: "可能です．ただし強い痛みやしびれがある場合は，医療機関の受診を優先してください．",
      },
      {
        q: "運動が苦手でも大丈夫ですか？",
        a: "大丈夫です．評価→改善ステップを“できる形”に落として進めます．",
      },
      {
        q: "持ち物は何が必要ですか？",
        a: "動きやすい服装とタオル，水分があると安心です．",
      },
    ],
    []
  )

  const [openIdx, setOpenIdx] = useState<number | null>(0)

  // Hero画像：public 直置きでもOK（/hero.jpg）
  // 今回は「スマホcontain / PC cover」案（C案）を採用
  const heroUrl = "/hero.jpg" // public/hero.jpg を置けば差し替わる

  // 骨画像：public/bone.png を置けば表示（なければ薄いプレースホルダになる）
  const boneUrl = "/bone.jpg"

  const instagramDmUrl = "https://www.instagram.com/" // ← あなたのアカウントURLに差し替え

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* 文字ロゴ */}
          <a href="#top" className="leading-tight">
            <div className="text-[11px] tracking-[0.25em] text-slate-500">
              POSTURE
            </div>
            <div className="text-lg font-bold text-slate-900">
              骨格ベクトレーニング
            </div>
            <div className="text-xs text-slate-500">
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
            className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition"
          >
            体験予約
          </a>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />

      {/* HERO */}
      <section id="top" className="relative">
        <div className="relative">
          {/* 背景 */}
          <div
            className="
              relative w-full
              h-[520px] md:h-[640px]
              bg-slate-900
              "
            style={{
              backgroundImage: `url('${heroUrl}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // C案：スマホ contain / PC cover
              backgroundSize: "contain",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/50" />
          </div>

          {/* PCだけ cover にする（C案） */}
          <style>
            {`
              @media (min-width: 768px) {
                #heroBg { background-size: cover !important; }
              }
            `}
          </style>

          {/* ↑の style を効かせるために id を付与 */}
          <div
            id="heroBg"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url('${heroUrl}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />

          {/* コンテンツ */}
          <div className="absolute inset-0">
            <div className="mx-auto max-w-6xl px-4 h-full grid md:grid-cols-2 items-center gap-10">
              <div className="text-white">
                <span className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs">
                  完全予約制・マンツーマン
                </span>

                <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  骨格から整え，
                  <br />
                  本来の身体へ．
                </h1>

                <p className="mt-4 text-white/90 leading-relaxed max-w-xl">
                  姿勢・動作を評価し，あなたに合わせて最短ルートで整えるパーソナル指導．
                  痛み・不調の根本改善と，再発しにくい身体づくりへ．
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 transition"
                  >
                    予約はこちら →<br />
                    ※男性のお客様は，ご紹介の方のみで行わせていただきます．<br />ご了承ください．
      
                  </a>

                  <a
                    href={instagramDmUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white/10 border border-white/30 text-white px-5 py-3 font-semibold hover:bg-white/15 transition"
                  >
                    Instagram DMで相談
                  </a>
                </div>

                <p className="mt-4 text-xs text-white/75">
                  所要時間90分
                </p>
              </div>

              {/* 右側カード */}
              <div className="md:justify-self-end w-full max-w-md">
                <div className="rounded-2xl bg-white/92 backdrop-blur p-5 shadow-xl border border-white/30">
                  <div className="text-sm font-bold text-slate-900">
                    {/* まずは体験で，方向性を決める */}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                      姿勢・動作の評価
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                      原因の整理・改善ステップ設計
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                      自宅でできるセルフケア提案
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex w-full justify-center rounded-xl bg-slate-900 text-white px-4 py-3 font-semibold hover:bg-slate-800 transition"
                  >
                    予約へ
                  </a>
                  <p className="mt-2 text-xs text-slate-500 text-center">
                    予約はInstagram DMでOK<br />

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT（骨画像つき） */}
      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* 左：骨画像カード */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
              <div className="flex items-center justify-center">
                <img
                  src={boneUrl}
                  alt="骨格イメージ"
                  className="max-h-[420px] w-auto opacity-95"
                  onError={(e) => {
                    // 画像が無いときのフェイルセーフ
                    ;(e.currentTarget as HTMLImageElement).style.display =
                      "none"
                  }}
                />
                {/* 画像が無い場合でも空になり過ぎないように */}
                <div className="text-slate-400 text-sm" />
              </div>
            </div>

            {/* 右：説明 */}
            <div>
              <p className="text-sm font-semibold text-slate-600">
                骨格ベクトレーニングとは
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                根本から動きを整える，
                <br />
                新しいアプローチ．
              </h2>

              <p className="mt-4 text-slate-700 leading-relaxed">
                一般的な筋力トレーニングは「筋肉を鍛える」ことが目的ですが，
                骨格ベクトレーニングは「身体の使い方を最適化する」ことを目的としています．
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                骨格の軸（身体の中心線），重心（バランスの中心），可動性（関節の動き）を評価し，
                動作ベクトル（力の方向）を分析することで，痛みの原因や動作の非効率性を明確にします．
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                根本から整えることで，一時的な改善ではなく，
                長期的に良い状態を維持できる身体づくりをサポートします．
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
                <span className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold">
                  ✓
                </span>
                <div className="font-semibold text-slate-800">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section id="flow" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
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
                <div className="mt-2 text-lg font-bold text-slate-900">
                  {f.title}
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">
            よくある質問
          </h2>

          <div className="mt-8 mx-auto max-w-3xl space-y-4">
            {faqs.map((f, i) => {
              const open = openIdx === i
              return (
                <div
                  key={f.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold">
                        Q
                      </span>
                      <span className="font-semibold text-slate-900">
                        {f.q}
                      </span>
                    </div>
                    <span className="text-slate-500 text-xl">
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  {open && (
                    <div className="px-5 pb-5">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 font-bold">
                          A
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                体験予約・お問い合わせ
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                ご予約は Instagram のDMからお願いします．
                「お名前」「お悩み」「希望日時（2〜3候補）」を送ってください．
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/natural_body_s?igsh=MWxsMzhvZ2JyeG50bw=="
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 transition"
                >
                  Instagram DMで予約する →
                </a>
                <a
                  href="#top"
                  className="rounded-xl bg-white/10 border border-white/25 px-5 py-3 font-semibold hover:bg-white/15 transition"
                >
                  トップに戻る
                </a>
              </div>

              <p className="mt-4 text-xs text-white/70">
                ※ 症状が強い場合は医療機関の受診を優先してください．<br />
                ※尚，この施術は医療行為ではありません．<br />
                ※男性のお客様はご紹介の方のみでお願いいたします．
              </p>
            </div>

            <div className="rounded-2xl bg-white/8 border border-white/15 p-6">
              <div className="text-lg font-bold">送る内容テンプレ</div>
              <div className="mt-4 text-sm text-white/85 leading-relaxed whitespace-pre-wrap">
                {`① お名前：
② お悩み（例：肩こり／腰痛／姿勢など）：
③ 希望日時（2〜3候補）：
④ 目的（例：痛み改善／スポーツ動作改善など）：`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} POSTURE 骨格ベクトレーニング
      </footer>
    </div>
  )
}
