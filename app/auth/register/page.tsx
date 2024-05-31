import { RegisterForm } from "@/components/register-form";
import { AuroraBackground } from "@/components/ui/aurora-background";
export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <RegisterForm />
      </div>
      <AuroraBackground className="hidden bg-muted lg:block">
        <div></div>
      </AuroraBackground>
    </div>
  );
}
