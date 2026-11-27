"use client";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/app/components/ui/field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Form } from "@base-ui/react";

export default function Signin() {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <p>Sign in</p>
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
          <div className="flex items-center justify-center px-6 py-8  lg:px-12">
            <div className="w-full max-w-sm flex flex-col gap-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">
                  Sign in
                </DialogTitle>

                <DialogDescription>
                  Don't have an account ?{" "}
                  <Link
                    href="/components/pages/auth/signup"
                    className="text-green-500 font-medium no-underline"
                  >
                    Sign up
                  </Link>
                </DialogDescription>
              </DialogHeader>

              <Form>
                <FieldGroup>
                  <Field>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your username or email"
                      required
                    />
                  </Field>

                  {/* Password Field */}
                  <Field>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        id="pass"
                        placeholder="Password"
                        className="pr-12"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                      >
                        {showPassword ? (
                          <EyeOffIcon size={15} />
                        ) : (
                          <EyeIcon size={15} />
                        )}
                      </button>
                    </div>
                  </Field>

                  {/* Checkbox */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-3">
                      <Checkbox
                        className="border-neutral-500 dark:border-neutral-300"
                        checked={checked}
                        onCheckedChange={(value) => setChecked(value === true)}
                      />

                      <FieldDescription>Remember me</FieldDescription>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm hover:text-black">
                        Forgot password?
                      </p>
                    </div>
                  </div>
                </FieldGroup>
              </Form>

              <Button className="w-full">Sign up</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
