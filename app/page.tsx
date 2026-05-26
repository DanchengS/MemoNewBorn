import NavBar from "@/components/NavBar";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Reusable layout pieces ───────────────────────────────────────────────────

function SectionHeader({
  title,
  subtitle,
  tag,
}: {
  title: string;
  subtitle?: string;
  tag?: string;
}) {
  return (
    <div className="mb-10">
      {tag && (
        <p className="text-[0.625rem] font-semibold tracking-[0.15em] text-stone-400 uppercase mb-3">
          {tag}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-stone-400 mt-2 text-sm">{subtitle}</p>
      )}
      <div className="w-6 h-px bg-stone-200 mt-5" />
    </div>
  );
}

function SubHeader({ title }: { title: string }) {
  return (
    <h3 className="text-[0.625rem] font-semibold tracking-[0.12em] text-stone-400 uppercase mb-4 mt-8 pb-2.5 border-b border-stone-100">
      {title}
    </h3>
  );
}

type TagVariant = "default" | "recommended" | "warning" | "avoid";

function Card({
  title,
  description,
  tagText,
  tagVariant = "default",
  note,
  highlight,
  children,
}: {
  title: string;
  description?: string;
  tagText?: string;
  tagVariant?: TagVariant;
  note?: string;
  highlight?: boolean;
  children?: React.ReactNode;
}) {
  const tagStyles: Record<TagVariant, string> = {
    default: "bg-stone-100 text-stone-600",
    recommended: "bg-stone-900 text-white",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    avoid: "bg-red-50 text-red-500",
  };

  return (
    <div
      className={`bg-white rounded-xl p-4 card-hover h-full flex flex-col ${
        highlight ? "border-2 border-stone-900" : "border border-stone-100"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h3 className="font-semibold text-stone-900 text-xs leading-snug">{title}</h3>
        {tagText && (
          <span className={`shrink-0 px-1.5 py-0.5 text-[0.625rem] rounded font-medium ${tagStyles[tagVariant]}`}>
            {tagText}
          </span>
        )}
      </div>
      {description && (
        <p className="text-stone-400 text-xs leading-relaxed flex-1 mt-0.5">{description}</p>
      )}
      {children}
      {note && (
        <div className="mt-3 pl-2.5 border-l-2 border-amber-300 text-[0.625rem] text-stone-500 leading-relaxed">
          {note}
        </div>
      )}
    </div>
  );
}

function TipBox({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  const borderStyles = {
    info: "border-blue-300",
    warning: "border-amber-300",
    success: "border-emerald-400",
  };
  return (
    <div className={`border-l-2 ${borderStyles[type]} pl-3 py-0.5 text-xs text-stone-600 leading-relaxed`}>
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white px-6 z-10 max-w-3xl mx-auto">
            <p className="text-[0.625rem] font-semibold tracking-[0.2em] text-white/40 uppercase mb-8">
              来自过来人的经验分享
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-2.5 tracking-tight leading-[1.05]">
              新生儿及孕产期
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.05]">
              物品清单
            </h1>
            <a
              href="#big-items"
              className="inline-block bg-white text-stone-900 font-semibold px-7 py-3 rounded-full text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
            >
              开始浏览
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ── 大件必备 ──────────────────────────────────────────── */}
        <section id="big-items" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="必须准备"
                title="大件必备"
                subtitle="宝宝出生前要准备好的大件"
              />
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <SubHeader title="婴儿车 Stroller" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <AnimatedSection delay={120}>
                <Card
                  title="Uppababy Vista"
                  description="我们买的这个。最多可以装俩坐着的小孩。高景观、底盘稳、底下能装超多东西。小的时候要加 infant insert 才能用。"
                  tagText="我们的选择"
                  tagVariant="recommended"
                  note="缺点是比较重"
                  highlight
                />
              </AnimatedSection>
              <AnimatedSection delay={180}>
                <Card
                  title="Cybex"
                  description="挺好看，颜值高，各方面也是不错的选择。"
                  tagText="颜值高"
                />
              </AnimatedSection>
              <AnimatedSection delay={240}>
                <Card
                  title="Graco"
                  description="老美比较常用，性价比高，功能实用，口碑稳定。"
                  tagText="性价比"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection delay={80}>
              <SubHeader title="提篮 Infant Car Seat" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <AnimatedSection delay={120}>
                <Card
                  title="出院必备"
                  description="必须要有才能出院！把小孩装篮子里，再把篮子装汽车/推车上。建议买和 Stroller 同品牌的 car seat，会比较方便。不同品牌需要买 adapter。"
                />
              </AnimatedSection>
              <AnimatedSection delay={180}>
                <Card
                  title="使用周期"
                  description="Infant car seat 一般坐 4 个月左右就淘汰。买二手时务必检查有效期（通常约 10 年）。"
                  note="买二手一定要检查有效期"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection delay={80}>
              <SubHeader title="成长椅" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <AnimatedSection delay={120}>
                <Card
                  title="Stokke"
                  description="基本人手一个！小时用 newborn set（拉屎神器）让娃躺上面，也可趴上面练习抬头，长大可以当椅子用到大。"
                  tagText="强烈推荐"
                  tagVariant="recommended"
                  highlight
                />
              </AnimatedSection>
              <AnimatedSection delay={180}>
                <Card
                  title="Stokke 轮子"
                  description="国内可以买非官方轮子（官方没有），椅子能在家里推来推去，非常方便！"
                  tagText="海淘好物"
                />
              </AnimatedSection>
              <AnimatedSection delay={240}>
                <Card
                  title="餐盘选择"
                  description="不要买 Stokke 官方餐盘（磨砂面，吸盘碗吸不上去）。推荐买亚马逊光面 tray，以后娃吃饭掉落的食物不会全落地上，开始吃辅食后可加配套 catchy 承接食物。"
                  tagText="避坑"
                  tagVariant="warning"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Baby Registry ─────────────────────────────────────── */}
        <section id="registry" className="py-16 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="薅羊毛"
                title="Baby Registry"
                subtitle="注册获得大量试用装，先试再买"
              />
            </AnimatedSection>
            <AnimatedSection delay={80}>
              <div className="mb-6">
                <TipBox type="info">
                  注册 Baby Registry 可以薅羊毛，获得很多试用装。这样你才知道娃比较喜欢/适合用什么。
                  例如奶瓶，不同娃爱用不同的奶瓶/奶嘴。尽量用 Baby Registry 薅一些回来，多试几个牌子后再自己花钱买！
                </TipBox>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { title: "Target", desc: "实体店方便，品类齐全", highlight: false },
                { title: "Walmart", desc: "价格实惠，选择多", highlight: false },
                { title: "Enfamil", desc: "奶粉品牌，有免费样品", highlight: false },
                { title: "Similac", desc: "奶粉品牌，免费试用装", highlight: false },
                { title: "Amazon", desc: "主推！加入清单后自己买享 85 折", highlight: true },
                { title: "Bed Bath & Beyond", desc: "床品和家居用品为主", highlight: false },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 60 + 120}>
                  <div
                    className={`bg-white rounded-xl p-4 card-hover h-full ${
                      item.highlight ? "border-2 border-stone-900" : "border border-stone-100"
                    }`}
                  >
                    <div className="font-semibold text-stone-900 text-xs mb-1">{item.title}</div>
                    <p className="text-[0.6875rem] text-stone-400 leading-relaxed">{item.desc}</p>
                    {item.highlight && (
                      <span className="inline-block mt-2.5 px-1.5 py-0.5 bg-stone-900 text-white text-[0.625rem] rounded font-medium">
                        85折优惠
                      </span>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── 好用的东西 ────────────────────────────────────────── */}
        <section id="useful" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="实用推荐"
                title="好用的东西"
                subtitle="让育儿更轻松的实用好物"
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: "哺乳椅", desc: "带脚凳，可摇摆。哺乳时超舒服，建议配合脚凳使用，减轻腰背疲惫。" },
                { title: "哺乳枕", desc: "哺乳时支撑宝宝，减轻手臂负担，也可用于辅助宝宝练习趴趴。" },
                { title: "Diaper Genie", desc: "专用尿布垃圾桶，有密封结构，防止气味扩散到室内，育儿期间非常实用。" },
                { title: "尿布台", desc: "小月龄有用，站着换尿布对腰比较友好。娃能翻身后使用频率会降低。" },
                { title: "婴儿体重秤", desc: "洗澡后称重，监控娃的生长发育。特别适合母乳宝宝，确保吃够了。" },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 80}>
                  <Card title={item.title} description={item.desc} />
                </AnimatedSection>
              ))}

              <AnimatedSection delay={440}>
                <div className="bg-white rounded-xl p-4 card-hover border border-stone-100 h-full">
                  <h3 className="font-semibold text-stone-900 text-xs mb-4">推荐 App</h3>
                  <div className="space-y-2">
                    {[
                      { name: "美柚", desc: "可以看不同孕期有什么注意事项" },
                      { name: "Baby Knock", desc: "后期每天数胎动，发动时计算宫缩时长和频率" },
                      { name: "Baby Tracker", desc: "记录娃的吃喝拉撒，多久没换尿布/吃奶一目了然" },
                    ].map((app) => (
                      <div key={app.name} className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
                        <div className="font-semibold text-stone-900 text-[0.6875rem]">{app.name}</div>
                        <div className="text-[0.625rem] text-stone-400 mt-0.5 leading-relaxed">{app.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Bedding ───────────────────────────────────────────── */}
        <section id="bedding" className="py-16 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="安睡准备"
                title="床品 Bedding"
                subtitle="安睡是最重要的事"
              />
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <div className="bg-white rounded-xl p-5 border border-stone-100 card-hover mb-4">
                <h3 className="font-semibold text-stone-900 text-sm mb-1.5">床垫 Mattress</h3>
                <p className="text-xs text-stone-400 mb-4 leading-relaxed">
                  Breathable 床垫的作用是防止小朋友翻身后脸朝下不会窒息，非常重要！
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                    <div className="font-semibold text-stone-900 text-xs mb-1">Naturepedic</div>
                    <div className="text-[0.6875rem] text-stone-500 leading-relaxed">
                      我们用的。配 breathable 床垫套，防窒息。纯 Organic，本身防水。
                    </div>
                    <span className="inline-block mt-2 px-1.5 py-0.5 bg-stone-900 text-white text-[0.625rem] rounded font-medium">
                      我们的选择
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                    <div className="font-semibold text-stone-900 text-xs mb-1">Newton</div>
                    <div className="text-[0.6875rem] text-stone-500 leading-relaxed">
                      很多人推荐，breathable 设计，透气性极佳。
                    </div>
                    <span className="inline-block mt-2 px-1.5 py-0.5 bg-stone-100 text-stone-600 text-[0.625rem] rounded font-medium">
                      热门推荐
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <AnimatedSection delay={160}>
                <Card
                  title="床架"
                  description="无所谓，可买 convertible 款用到几岁，也可以 Ikea。优先考虑无油漆款，避免宝宝啃咬。"
                />
              </AnimatedSection>
              <AnimatedSection delay={240}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <h3 className="font-semibold text-stone-900 text-xs mb-4">Bassinet → Crib 过渡</h3>
                  <div className="space-y-3 text-xs text-stone-400">
                    <div className="flex items-start gap-2.5">
                      <span className="text-stone-300 font-semibold text-[0.625rem] shrink-0 mt-0.5 tabular-nums">01</span>
                      <span>小月龄用 bassinet 靠床一侧，方便夜间哺乳</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-stone-300 font-semibold text-[0.625rem] shrink-0 mt-0.5 tabular-nums">02</span>
                      <span>大了换 crib（儿医建议：同房不同床）</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={320}>
                <Card
                  title="床品"
                  description="淘宝 / 1688 买床套、bassinet 床垫套（纯棉），性价比超高，质量不错。"
                  tagText="海淘推荐"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 海淘推荐 ──────────────────────────────────────────── */}
        <section id="haotao" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="国内海淘"
                title="海淘推荐"
                subtitle="性价比超高的好物"
              />
            </AnimatedSection>

            <AnimatedSection delay={60}>
              <p className="text-[0.625rem] font-semibold tracking-[0.12em] text-stone-400 uppercase mb-4">
                妈妈用
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
              {[
                { title: "托腹带", desc: "孕后期分散肚子重量，减轻腰背压力" },
                { title: "压缩袜", desc: "后期脚水肿，穿压缩袜会舒服很多" },
                { title: "安睡裤", desc: "产后必备，舒适实用" },
                { title: "产妇睡衣", desc: "月子期间穿，方便哺乳" },
                { title: "Peri Bottle", desc: "产后个人护理清洁必备" },
                { title: "洗头神器", desc: "月子期卧床洗头专用" },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 50 + 100}>
                  <div className="bg-white rounded-xl p-3 border border-stone-100 card-hover text-center h-full flex flex-col items-center">
                    <div className="font-semibold text-stone-900 text-[0.6875rem] mb-1">{item.title}</div>
                    <p className="text-[0.625rem] text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={60}>
              <p className="text-[0.625rem] font-semibold tracking-[0.12em] text-stone-400 uppercase mb-4">
                宝宝用
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { title: "口水巾", desc: "6层纱布以上才够软，备20-30条，勤换预防口水疹" },
                { title: "拍嗝巾", desc: "竖抱拍嗝防吐奶，或趴睡垫肩" },
                { title: "隔尿垫", desc: "Costco狗尿垫用完就扔；布面防水款铺床上换尿布" },
                { title: "方巾", desc: "不同大小各备10多条，擦脸洗澡都能用" },
                { title: "床套", desc: "多备几套，洗了晾干可换" },
                { title: "包巾", desc: "小月龄睡觉必备！美国质量差，建议海淘，包紧才有效果" },
                { title: "睡袋", desc: "多准备几条，孩子长得快，海淘性价比高" },
                { title: "和尚服连体衣", desc: "避免套头款，推荐乖奇熊，质量好" },
                { title: "婴儿游泳桶", desc: "放电、缓解二月胀气神器" },
                { title: "袜子/手套", desc: "防抓脸，新生儿可用袜子当手套" },
                { title: "水龙头花洒", desc: "在洗手盆给娃洗屁股，方便太多了" },
                { title: "奶粉分装盒", desc: "可喝奶粉后，出门必备" },
                { title: "磨指甲", desc: "专用磨甲器，比剪指甲更安全" },
                { title: "温度计", desc: "量化睡觉环境温度，保持穿衣稳定" },
                { title: "Crinkle Book", desc: "Jollybaby的书，淘宝可买，触觉听觉发育好物" },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 35 + 100}>
                  <div className="bg-white rounded-xl p-3 border border-stone-100 card-hover h-full">
                    <div className="font-semibold text-stone-900 text-[0.6875rem] mb-1">{item.title}</div>
                    <p className="text-[0.625rem] text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── 产后月子药膳 ──────────────────────────────────────── */}
        <section id="postpartum" className="py-16 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="产后调养"
                title="产后月子药膳"
                subtitle="调养身体，恢复元气"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-xl">
                <div className="bg-white rounded-xl p-6 border border-stone-100 card-hover">
                  <h3 className="font-semibold text-stone-900 text-base mb-1.5">Newspring 月子药膳</h3>
                  <p className="text-stone-400 text-xs leading-relaxed mb-5">
                    下单后一周左右寄到，不用太早买（药材保存有限）。偏温补，效果因人而异。
                  </p>
                  <a
                    href="http://www.newspring.tw/Products/Product/154179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-xs rounded-full font-semibold hover:bg-stone-700 transition-all duration-300"
                  >
                    查看详情 →
                  </a>
                  <div className="mt-5">
                    <TipBox type="info">
                      建议产前 1–2 周下单，不要太早买，确保药材新鲜度。
                    </TipBox>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 新生儿必备 ────────────────────────────────────────── */}
        <section id="newborn" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="日常护理"
                title="新生儿必备"
                subtitle="宝宝日常护理好物清单"
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <AnimatedSection delay={80}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <h3 className="font-semibold text-stone-900 text-xs mb-3">身体乳（保湿防干燥）</h3>
                  <div className="space-y-1.5">
                    {["CeraVe Baby Moisturizing Lotion", "Cetaphil 大白罐"].map((name) => (
                      <div key={name} className="flex items-center gap-2.5 p-2.5 bg-stone-50 rounded-lg text-[0.6875rem] text-stone-600 border border-stone-100">
                        <span className="w-1 h-1 rounded-full bg-stone-300 shrink-0" />
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={160}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <h3 className="font-semibold text-stone-900 text-xs mb-3">红屁股护理</h3>
                  <div className="space-y-1.5 mb-3">
                    <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="text-[0.6875rem] font-medium text-stone-600">日常 — Destin Daily Defense Cream</div>
                    </div>
                    <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="text-[0.6875rem] font-medium text-stone-600">严重 — Destin Maximum Strength</div>
                    </div>
                  </div>
                  <div className="pl-2.5 border-l-2 border-stone-200 text-[0.625rem] text-stone-500 leading-relaxed">
                    <span className="font-semibold block mb-0.5">推荐流程</span>
                    拉屎 → 水洗 → 棉柔巾吸干 → 抹药膏 → 穿尿布
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={240}>
                <Card
                  title="凡士林"
                  description="日常替代 Daily Defense，透气，温和，什么肤况都适用，性价比极高。"
                />
              </AnimatedSection>
              <AnimatedSection delay={320}>
                <Card
                  title="Tubby Todd"
                  description="价格偏贵，但新生儿起疹子时效果非常显著。"
                  tagText="救急推荐"
                />
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <Card
                  title="Costco 狗尿垫"
                  description="换尿布 / 外出必备，便宜实用，用完就扔超方便。新生儿换尿布频率很高，这个省了很多麻烦。"
                  tagText="日常必备"
                />
              </AnimatedSection>

              <AnimatedSection delay={480}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <h3 className="font-semibold text-stone-900 text-xs mb-3">包巾 / 睡袋</h3>
                  <div className="space-y-1.5 mb-3">
                    <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="font-semibold text-stone-900 text-[0.6875rem]">小月龄 — SwaddleMe / 包巾</div>
                      <div className="text-[0.625rem] text-stone-400 mt-0.5">防惊跳，帮助安睡</div>
                    </div>
                    <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="font-semibold text-stone-900 text-[0.6875rem]">大点 — Love to Dream</div>
                      <div className="text-[0.625rem] text-stone-400 mt-0.5">有可拆袖子版，会翻身后解放双手</div>
                    </div>
                  </div>
                  <div className="pl-2.5 border-l-2 border-amber-300 text-[0.625rem] text-stone-500 leading-relaxed">
                    <span className="font-semibold block mb-0.5">关于 TOG</span>
                    TOG 越高越暖，越低越透气。保持房间温度恒定比加衣服更重要——十个睡不好的孩子，九个是热的！
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={560}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <h3 className="font-semibold text-stone-900 text-xs mb-3">衣物</h3>
                  <div className="space-y-1.5 text-[0.6875rem] text-stone-400">
                    {[
                      "Uniqlo 质量不错，性价比高",
                      "Gerber 好用，美式经典",
                      "开衫比套头好穿，换衣服更容易",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-stone-300 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={640}>
                <Card
                  title="洗澡盆"
                  description="Amazon 上有卖，选有支架款，站着洗不用弯太低，对腰好。"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 奶瓶选购 ──────────────────────────────────────────── */}
        <section id="bottles" className="py-16 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <SectionHeader
                tag="喂养准备"
                title="奶瓶选购"
                subtitle="先用 Registry 薅样品，多试再大量买"
              />
            </AnimatedSection>
            <AnimatedSection delay={60}>
              <div className="mb-6">
                <TipBox type="info">
                  先用 baby registry 薅到的先用着，看娃喜欢哪个。不同娃爱用不同的奶瓶和奶嘴，多试之后再大量购买！
                </TipBox>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              <AnimatedSection delay={100}>
                <div className="bg-white rounded-xl p-4 border-2 border-stone-900 card-hover h-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-stone-900 text-xs">NUK</h3>
                    <span className="px-1.5 py-0.5 bg-stone-900 text-white text-[0.625rem] rounded font-medium">我们最爱</span>
                  </div>
                  <p className="text-[0.6875rem] text-stone-400 leading-relaxed">便宜好用，娃爱用，塑料瓶几个月一换就行。</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={160}>
                <div className="bg-white rounded-xl p-4 border border-stone-200 card-hover h-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-stone-900 text-xs">贝亲</h3>
                    <span className="px-1.5 py-0.5 bg-stone-100 text-stone-600 text-[0.625rem] rounded font-medium">并列第一</span>
                  </div>
                  <p className="text-[0.6875rem] text-stone-400 leading-relaxed">玻璃瓶质感好，但娃能自己手抓后就不用玻璃瓶了。</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={220}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-stone-900 text-xs">Dr Brown</h3>
                    <span className="px-1.5 py-0.5 bg-red-50 text-red-500 text-[0.625rem] rounded font-medium">不推荐</span>
                  </div>
                  <p className="text-[0.6875rem] text-stone-400 leading-relaxed">零件过多，洗起来麻烦，我家娃喝这个容易漏一脖子奶。</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={280}>
                <div className="bg-white rounded-xl p-4 border border-stone-100 card-hover h-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-stone-900 text-xs">MAM</h3>
                    <span className="px-1.5 py-0.5 bg-red-50 text-red-500 text-[0.625rem] rounded font-medium">一生黑</span>
                  </div>
                  <p className="text-[0.6875rem] text-stone-400 leading-relaxed">
                    奶嘴好用，但设计有缺陷：热奶时气压变化容易把热水漏进奶瓶或把奶漏出去。
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {(
                [
                  { title: "奶瓶消毒", desc: "蒸汽消毒 + 烘干一体机，good enough，省事省心。" },
                  { title: "婴儿洗洁精", desc: "专用洗奶瓶洗洁精，温和不留残留，宝宝安全第一。" },
                  { title: "热奶器", desc: "必备！冲好奶或冷冻母乳都需要加热，方便夜间喂奶。" },
                  { title: "Baby Brezza 奶粉机", desc: "如果不打算母乳，强烈推荐！自动按比例冲奶，深夜救星。", tagText: "推荐", tagVariant: "recommended" as TagVariant },
                ] as { title: string; desc: string; tagText?: string; tagVariant?: TagVariant }[]
              ).map((item, i) => (
                <AnimatedSection key={item.title} delay={(i + 4) * 70}>
                  <Card
                    title={item.title}
                    description={item.desc}
                    tagText={item.tagText}
                    tagVariant={item.tagVariant}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer className="py-14 bg-[#1C1C1E] text-center">
          <p className="text-sm font-semibold text-white mb-1.5">新生儿及孕产期物品清单</p>
          <p className="text-xs text-white/30 mb-8">来自过来人的经验分享 · 仅供参考</p>
          <a
            href="#"
            className="inline-block px-5 py-2 border border-white/20 text-white/40 rounded-full text-xs hover:border-white/40 hover:text-white/70 transition-all duration-300"
          >
            回到顶部 ↑
          </a>
          <p className="text-[0.625rem] text-white/15 mt-8">Made with care for new parents</p>
        </footer>
      </main>
    </>
  );
}
