"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCheckoutSchema, checkoutSchema } from "@/app/_lib/validators";
import FormInput from "./FormInput";
import { useState } from "react";
import Image from "next/image";

type CheckoutFormProps = {
  onFormSubmit: (data: TCheckoutSchema) => void;
};

export default function CheckoutForm({ onFormSubmit }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TCheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "eMoney",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col gap-8"
      id="checkout-form"
    >
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <legend className="text-sm font-bold uppercase text-orange-primary mb-4 col-span-full">
          Billing Details
        </legend>
        <FormInput
          label="Name"
          name="name"
          register={register("name")}
          error={errors.name?.message}
          placeholder="Alexei Ward"
        />
        <FormInput
          label="Email Address"
          name="email"
          register={register("email")}
          error={errors.email?.message}
          placeholder="alexei@mail.com"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          register={register("phone")}
          error={errors.phone?.message}
          placeholder="+1 202-555-0136"
        />
      </fieldset>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <legend className="text-sm font-bold uppercase text-orange-primary mb-4 col-span-full">
          Shipping Info
        </legend>
        <div className="md:col-span-2">
          <FormInput
            label="Address"
            name="address"
            register={register("address")}
            error={errors.address?.message}
            placeholder="1137 Williams Avenue"
          />
        </div>
        <FormInput
          label="ZIP Code"
          name="zip"
          register={register("zip")}
          error={errors.zip?.message}
          placeholder="10001"
        />
        <FormInput
          label="City"
          name="city"
          register={register("city")}
          error={errors.city?.message}
          placeholder="New York"
        />
        <FormInput
          label="Country"
          name="country"
          register={register("country")}
          error={errors.country?.message}
          placeholder="United States"
        />
      </fieldset>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <legend className="text-sm font-bold uppercase text-orange-primary mb-4 col-span-full">
          Payment Details
        </legend>

        <label className="text-xs font-bold md:col-span-1">Payment Method</label>
        <div className="flex flex-col gap-4 md:col-span-1">
          <label
            className={`flex items-center border rounded-lg px-6 py-4 font-bold text-sm cursor-pointer
                        ${
                          selectedPaymentMethod === "eMoney"
                            ? "border-orange-primary ring-1 ring-orange-primary"
                            : "border-gray-300"
                        }`}
          >
            <input
              {...register("paymentMethod")}
              type="radio"
              value="eMoney"
              className="accent-orange-primary mr-4"
            />
            e-Money
          </label>
          <label
            className={`flex items-center border rounded-lg px-6 py-4 font-bold text-sm cursor-pointer
                        ${
                          selectedPaymentMethod === "cashOnDelivery"
                            ? "border-orange-primary ring-1 ring-orange-primary"
                            : "border-gray-300"
                        }`}
          >
            <input
              {...register("paymentMethod")}
              type="radio"
              value="cashOnDelivery"
              className="accent-orange-primary mr-4"
            />
            Cash on Delivery
          </label>
        </div>


        {selectedPaymentMethod === "eMoney" && (
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6 mt-4">
            <FormInput
              label="e-Money Number"
              name="eMoneyNumber"
              register={register("eMoneyNumber")}
              error={errors.eMoneyNumber?.message}
              placeholder="238521993"
            />
            <FormInput
              label="e-Money PIN"
              name="eMoneyPin"
              register={register("eMoneyPin")}
              error={errors.eMoneyPin?.message}
              placeholder="6891"
            />
          </div>
        )}

        {selectedPaymentMethod === "cashOnDelivery" && (
          <div className="md:col-span-2 flex items-center gap-6 mt-4">
            <Image
              src="/assets/shared/icon-cash-on-delivery.svg"
              width={48}
              height={48}
              alt="Cash on Delivery Icon"
              aria-hidden="true"
            />
            <p className="text-black-dark text-opacity-50 text-base">
              The 'Cash on Delivery' option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </fieldset>
    </form>
  );
}