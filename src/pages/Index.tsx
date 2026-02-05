import { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { FeatureCard } from "@/components/FeatureCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { PainPointCard } from "@/components/PainPointCard";
import { SolutionCard } from "@/components/SolutionCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingTable } from "@/components/PricingTable";
import { Sparkles, Zap, Target, Video, Rocket, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const testimonials = [
  {
    quote: "作为独立开发者，我能快速做产品，但真的不会营销。A9 帮我快速生成了 Product Hunt 的宣传片，直接省下一周时间！",
    author: "Alex Chen",
    role: "独立开发者 / One Person Company",
  },
  {
    quote: "A9 太懂怎么讲产品故事了。生成的视频不仅专业，还真实展示了我的 UI 界面，投资人看完直接问估值！",
    author: "Sarah Wang",
    role: "初创公司创始人",
  },
  {
    quote: "以前做一个产品视频要找外包，等一周，花几千块。现在用 A9 几分钟搞定，而且质量更好！",
    author: "Mike Liu",
    role: "创业团队产品负责人",
  },
  {
    quote: "简单好上手，完全零门槛。我只输入了官网链接，A9 就帮我把产品卖点提炼得清清楚楚！",
    author: "Emma Zhang",
    role: "独立创业者 / OPC",
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    toast.success("正在分析你的网站...");
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      toast.success("视频生成成功！");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A9</span>
            </div>
            <span className="text-xl font-bold text-foreground">A9</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Chat Input */}
      <section className="container mx-auto px-4 pt-16 pb-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI驱动的营销视频生成器</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              A9，
            </span>
            几分钟生成产品宣传视频
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            让你的产品故事在 Product Hunt、YouTube 和 TikTok 上脱颖而出
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
            独立创业者、OPC、创业团队都在用的产品营销助手
          </p>

          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full mb-6">
            <span className="text-sm text-destructive font-medium">创作者的困境</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            产品做出来了，<span className="text-destructive">但是怎么卖？</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            在这个AI驱动的"一人创业公司"时代，产品构建已经被民主化，但营销能力的门槛依然很高
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <PainPointCard
            icon="🤔"
            title="策划能力之痛"
            subtitle="我不会说"
            description="我深知产品的每个细节，但不知道如何在1分钟内组织一个有吸引力、有逻辑、有说服力的叙事结构"
          />
          <PainPointCard
            icon="⏰"
            title="效率瓶颈之痛"
            subtitle="我没得用，也没时间"
            description="从写脚本、录屏、剪辑、配乐到适配不同平台，整个流程可能消耗创始人一整天甚至数天的时间"
          />
          <PainPointCard
            icon="🎨"
            title="专业壁垒之痛"
            subtitle="我做了，但看起来很业余"
            description="平台规则复杂、品牌感缺失、对视听语言陌生，导致营销物料看起来杂乱无章"
          />
          <PainPointCard
            icon="🎲"
            title="结果失控之痛"
            subtitle="工具给我的是惊喜，不是结果"
            description="现有AI视频工具结果不可控，需要二次加工。我需要的不是创意玩具，而是能稳定交付可发布成品的生产机器"
          />
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/50">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">A9 的解决方案</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            让产品运营像产品构建一样<span className="bg-gradient-primary bg-clip-text text-transparent">简单</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            一个能理解你的产品、替你完成从策略到成品全流程的自动化营销协作者
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <SolutionCard
            title="AI 产品理解引擎"
            description="自动爬取和分析官网内容，提取产品核心价值、目标用户和差异化优势，无需人工总结"
            highlight
          />
          <SolutionCard
            title="营销框架脚本生成"
            description="基于 AIDA、PAS 等经典营销框架，自动构建有吸引力的叙事结构和专业脚本"
            highlight
          />
          <SolutionCard
            title="智能视觉素材匹配"
            description="根据脚本内容，从官网截图、产品演示中智能匹配或生成视觉素材"
            highlight
          />
          <SolutionCard
            title="品牌风格自动提取"
            description="自动识别官网的色彩、字体、Logo，确保视频与品牌形象完美契合"
          />
          <SolutionCard
            title="多平台自适应输出"
            description="自动适配 Product Hunt、YouTube Shorts、TikTok 等平台规格要求"
          />
          <SolutionCard
            title="秒级成品交付"
            description="从输入URL到获得可发布成品，整个流程不超过2分钟，零学习成本"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">为什么选择 A9？</h2>
          <p className="text-muted-foreground">解决营销视频制作的所有痛点</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Zap}
            title="快速生成"
            description="只需输入官网URL，AI自动分析产品特点，生成专业级演示视频，无需任何视频制作经验"
          />
          <FeatureCard
            icon={Target}
            title="精彩叙事"
            description="基于营销框架自动构建故事脚本，确保每个视频都有吸引力、逻辑性和说服力"
          />
          <FeatureCard
            icon={Video}
            title="多平台适配和营销物料生成"
            description="自动适配各平台尺寸规格，还能一键生成上架所需的标题、描述、标签等辅助物料，省时省力"
          />
          <FeatureCard
            icon={Rocket}
            title="真实UI展示"
            description="直接录制并展示你的真实产品界面，让用户看到实际功能，而非AI虚构的华丽场景，更可信、更专业"
          />
          <FeatureCard
            icon={TrendingUp}
            title="品牌一致性"
            description="自动提取官网的品牌元素、色彩和风格，确保视频与你的品牌形象完美契合"
          />
          <FeatureCard
            icon={Sparkles}
            title="AI优化"
            description="利用AI技术优化视频节奏、转场和视觉效果，让你的产品展示更加专业吸睛"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary font-medium">用户评价</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            创业者们都在用 <span className="bg-gradient-primary bg-clip-text text-transparent">A9</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            听听他们怎么说
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary font-medium">价格方案</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            选择适合你的 <span className="bg-gradient-primary bg-clip-text text-transparent">方案</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从免费开始，按需升级
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card border border-border rounded-2xl shadow-soft overflow-hidden">
          <PricingTable />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">典型使用场景</h2>
          <p className="text-muted-foreground">无论何种需求，A9 都能完美胜任</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <UseCaseCard
            number="01"
            title="产品首发"
            description="在 Product Hunt、Hacker News 等平台发布时，用高质量宣传视频引爆关注度"
          />
          <UseCaseCard
            number="02"
            title="功能更新"
            description="快速制作新功能介绍视频，通知现有用户，同时吸引潜在新用户"
          />
          <UseCaseCard
            number="03"
            title="增长获客"
            description="在 TikTok、YouTube Shorts、Instagram Reels 等短视频平台进行低成本高效率的流量获取"
          />
          <UseCaseCard
            number="04"
            title="融资路演"
            description="制作专业精炼的演示视频，在几分钟内向投资人清晰展示产品价值"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 shadow-glow">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            准备好让你的产品被更多人看见了吗？
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            输入你的官网链接，立即体验 AI 驱动的营销视频生成
          </p>
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A9</span>
              </div>
              <span className="font-bold text-foreground">A9</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:support@a9ai.ai" className="hover:text-primary transition-colors">
                联系我们：support@a9ai.ai
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 A9. 让产品运营像产品构建一样简单。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
