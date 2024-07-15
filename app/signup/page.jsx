import LOGO from "@/public/LOGO.svg";
import Link from "next/link";
import work_email from "@/assets/work_email.svg";
import GoogleAuth from "@/components/register/GoogleAuth";
import SignInCreds from "@/components/register/CredsAuth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <div className="w-screen h-screen flex flex-col gap-[23px] bg-[#F5F6FA] justify-center items-center text-dark">
      <img src={LOGO.src} alt="LOGO" className="select-none" />
      <div className="p-[41px] bg-white rounded-[6px] flex flex-col gap-[24px] items-center">
        <div className="flex flex-col gap-[15px] items-center">
          <img src={work_email.src} alt="work email" />
          <div className="headding5-bold">Sign up with your work email</div>
          <div className="text-[14px] opacity-65">
            Use your work email to Sign up to your team workspace.
          </div>
        </div>
        <GoogleAuth />
        <div className="flex items-center justify-center text-dark w-full opacity-45">
          <div className="flex-1 w-full border-t border-dark"></div>
          <span className="px-3">OR</span>
          <div className="flex-1 w-full border-t border-dark"></div>
        </div>
        <SignInCreds type="sign up" />
      </div>
      <div>
        Already have an account yet?{" "}
        <Link href={"/login"} className="text-main inline-block">
          Login
        </Link>
      </div>
    </div>
  );
};

export default page;
