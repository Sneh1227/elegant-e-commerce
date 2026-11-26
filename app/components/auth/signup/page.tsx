"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Form } from "@base-ui/react";

export default function Auth() {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2">
      {/* Image Section */}
      <div className="relative hidden md:block min-h-[85vh]">
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
        <div className="w-full max-w-sm flex flex-col gap-4">
          <CardHeader className="p-0">
            <CardTitle className="text-3xl font-bold">Sign up</CardTitle>

            <CardDescription>
              Already have an account?{" "}
              <Link
                href="/components/auth/signin"
                className="text-green-500 font-medium"
              >
                Sign in
              </Link>
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <Form>
              <FieldGroup>
                <Field>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </Field>

                <Field>
                  <Input type="text" id="username" placeholder="Username" />
                </Field>

                <Field>
                  <Input type="email" id="email" placeholder="Email address" />
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
                <div className="flex gap-3 items-start mt-2">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(value) => setChecked(value === true)}
                  />

                  <FieldDescription>
                    I agree with{" "}
                    <span className="font-semibold text-black">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-black">
                      Terms of Use
                    </span>
                  </FieldDescription>
                </div>
              </FieldGroup>
            </Form>
          </CardContent>

          <CardFooter className="p-0">
            <Button className="w-full" disabled={!checked}>
              Sign up
            </Button>
          </CardFooter>
        </div>
      </div>
    </div>
  );
}
