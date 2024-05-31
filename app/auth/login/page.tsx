import { LoginForm } from "@/components/login-form";
import { AuroraBackground } from "@/components/ui/aurora-background";
export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <LoginForm />
      </div>
      <AuroraBackground className="hidden bg-muted lg:block">
        <div></div>
      </AuroraBackground>
    </div>
  );
}
