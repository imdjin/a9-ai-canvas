import { useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { FeatureCard } from "@/components/FeatureCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { PainPointCard } from "@/components/PainPointCard";
import { SolutionCard } from "@/components/SolutionCard";
import { Sparkles, Zap, Target, Video, Rocket, TrendingUp } from "lucide-react";
import { toast } from "sonner";

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
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A9</span>
            </div>
            <span className="text-xl font-bold text-foreground">A9</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Chat Input */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI驱动的营销视频生成器</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            把你的官网，
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              一键变成
            </span>
            <br />
            可投放的1分钟产品演示片
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            专为独立开发者和创业团队打造，让你的产品故事在 Product Hunt、YouTube 和 TikTok 上脱颖而出
          </p>

          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="container mx-auto px-4 py-16 bg-background/50">
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
      <section className="container mx-auto px-4 py-16">
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
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">为什么选择 A9？</h2>
          <p className="text-muted-foreground">解决营销视频制作的所有痛点</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Zap}
            title="一键生成"
            description="只需输入官网URL，AI自动分析产品特点，生成专业级演示视频，无需任何视频制作经验"
          />
          <FeatureCard
            icon={Target}
            title="精准叙事"
            description="基于营销框架自动构建故事脚本，确保每个视频都有吸引力、逻辑性和说服力"
          />
          <FeatureCard
            icon={Video}
            title="多平台适配"
            description="自动适配 Product Hunt、YouTube Shorts、TikTok 等平台的规格要求"
          />
          <FeatureCard
            icon={Rocket}
            title="秒级交付"
            description="从输入URL到获得成品视频，整个流程不超过2分钟，极大节省你的时间成本"
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

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
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
        <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-12 shadow-card">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            准备好让你的产品被更多人看见了吗？
          </h2>
          <p className="text-muted-foreground mb-8">
            输入你的官网链接，立即体验 AI 驱动的营销视频生成
          </p>
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 A9. 让产品运营像产品构建一样简单。</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
