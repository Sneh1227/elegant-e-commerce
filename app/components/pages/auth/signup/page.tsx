"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Field, FieldDescription, FieldGroup } from "@/app/components/ui/field";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Auth() {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog>
      {/* Open Popup */}
      <DialogTrigger>
        <p>Sign up</p>
      </DialogTrigger>

      <DialogContent className="lg:max-w-[100vh] p-0 overflow-hidden max-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-48 md:h-[580px]">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <h2 className="text-2xl font-semibold text-black">3legant.</h2>
            </div>
            <Image
              src="/images/auth-section/auth-hero.png"
              alt="auth-image"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">Sign up</DialogTitle>

              <DialogDescription>
                Already have an account ?{" "}
                <Link
                  href="/components/pages/auth/signin"
                  className="text-green-500 font-medium no-underline"
                >
                  Sign in
                </Link>
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Input type="text" placeholder="Your name" required />
              </Field>

              <Field>
                <Input type="text" placeholder="Username" />
              </Field>

              <Field>
                <Input type="email" placeholder="Email address" />
              </Field>

              {/* Password */}
              <Field>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pr-12"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={18} />
                    ) : (
                      <EyeIcon size={18} />
                    )}
                  </button>
                </div>
              </Field>

              {/* Checkbox */}
              <div className="flex gap-3 items-start">
                <Checkbox
                  className="border-neutral-500 dark:border-neutral-300"
                  checked={checked}
                  onCheckedChange={(value) => setChecked(value === true)}
                />

                <FieldDescription className="text-xs">
                  I agree with{" "}
                  <span className="font-semibold text-black">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-black">Terms of Use</span>
                </FieldDescription>
              </div>
            </FieldGroup>

            <Button className="w-full" disabled={!checked}>
              Sign up
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
