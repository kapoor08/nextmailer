"use client";
import { callbackRequestSchema } from "@/validations";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StateButton from "@/components/StateButton";
import { Controller } from "react-hook-form";
import axios from "axios";
import { notifyError, notifySuccess } from "@/utils/Notistack";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

const Form: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(callbackRequestSchema),
    mode: "onChange",
  });

  const handleSubmitCallbackForm: SubmitHandler<FormValues> = async (data) => {
    try {
      setLoading(true);
      await axios
        .post("/api/send-email", {
          email: data.email,
          phone: data.phone,
          name: data.name,
          message: data.message,
        })
        .then((res) => {
          console.log(res, "res res res");
          setLoading(false);
          notifySuccess(res?.data?.message);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err);
          reset();
        });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit callback request:", error);
    }
  };

  return (
    <div
      className={`${
        isSubmitted ? "!my-28" : "!my-10"
      } lg:!max-w-[930px] !max-w-[850px] !mx-auto sm:!px-0 !px-6`}
    >
      {
        <>
          <form onSubmit={handleSubmit(handleSubmitCallbackForm)}>
            <div className="flex flex-col justify-center !gap-5 !mt-10 bg-contact !pt-7 !pb-10 !px-4 !rounded-3xl !mx-auto">
              <div className="!text-[#fff] !text-3xl !text-center !mb-5">
                Personal Details
              </div>

              <div className="flex flex-col !justify-center !w-full">
                <Controller
                  name="name"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => (
                    <div className="flex flex-col !gap-1">
                      <div className="flex gap-10 !justify-center !w-full">
                        <div className="!text-[#fff] !my-auto">Name:</div>
                        <input
                          className="bg-contactDemo w-full max-w-[300px] focus:outline-none !text-[#fff] !py-2 !rounded-3xl !px-5"
                          placeholder="Name"
                          autoFocus
                          value={value}
                          onChange={onChange}
                          ref={ref}
                        />
                      </div>
                      {errors.name && (
                        <div className="flex justify-center !mt-1 !mr-8 !text-xs !text-[--error]">
                          {errors.name?.message}
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex flex-col !justify-center">
                <Controller
                  name="phone"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => (
                    <div className="flex flex-col !gap-1">
                      <div className="flex gap-10 !justify-center !w-full">
                        <div className="!text-[#fff] !my-auto">Phone:</div>
                        <input
                          className="bg-contactDemo w-full max-w-[300px] focus:outline-none !text-[#fff] !py-2 !rounded-3xl !px-5"
                          type="number"
                          placeholder="Phone Number"
                          value={value}
                          onChange={onChange}
                          ref={ref}
                        />
                      </div>
                      {errors.phone && (
                        <div className="flex justify-center !mt-1 !mr-8 !text-xs !text-[--error]">
                          {errors.phone?.message}
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex flex-col !justify-center">
                <Controller
                  name="email"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => (
                    <div className="flex flex-col !gap-1">
                      <div className="flex gap-10 !justify-center !w-full">
                        <div className="!text-[#fff] !my-auto">Email:</div>
                        <input
                          className="bg-contactDemo w-full max-w-[300px] focus:outline-none !text-[#fff] !py-2 !rounded-3xl !px-5"
                          placeholder="Email"
                          value={value}
                          onChange={onChange}
                          ref={ref}
                        />
                      </div>
                      {errors.email && (
                        <div className="flex justify-center !mt-1 !mr-8 !text-xs !text-[--error]">
                          {errors.email?.message}
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex flex-col !justify-center">
                <Controller
                  name="message"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => (
                    <div className="flex flex-col !gap-1">
                      <div className="flex gap-4 !justify-center !w-full">
                        <div className="!text-[#fff] !my-auto">Message:</div>
                        <textarea
                          rows={5}
                          className="bg-contactDemo w-full max-w-[300px] focus:outline-none !text-[#fff] !py-2 !rounded-3xl !px-5"
                          placeholder="Message Here...."
                          value={value}
                          onChange={onChange}
                          ref={ref}
                        />
                      </div>
                      {errors.message && (
                        <div className="flex justify-center !mt-1 !mr-8 !text-xs !text-[--error]">
                          {errors.message?.message}
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
            <StateButton
              text="Submit"
              handleClick={() => {}}
              className="flex !mt-10 !px-20 !py-8 !mx-auto"
              loading={loading}
            />
          </form>
        </>
      }
    </div>
  );
};

export default Form;
