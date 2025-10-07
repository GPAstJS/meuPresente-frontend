    import { useForm } from "react-hook-form";
    import { useHookFormMask } from "use-mask-input";
    import { yupResolver } from "@hookform/resolvers/yup";
    import { editProfileSchema } from "../utils/validations";
    import { useEditProfile } from "../hooks/use-edit-profile";

    import { Input } from "../components/Common/Input";
    import { Button } from "../components/Common/Button";
    import { Header } from "../components/Common/Header/index";
    import { SelectInput } from "../components/Common/SelectInput";

    import { CiUser } from "react-icons/ci";
    import { PiNotePencil } from "react-icons/pi";

    import { states } from "../utils/states";
    import { countries } from "../utils/countries";

    export const EditProfile = () => {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: yupResolver(editProfileSchema),
        });

        const { call } = useEditProfile();

        const registerWithMask = useHookFormMask(register);

        return (
                <div className="flex flex-col h-screen relative">
                    <div className="py-[15rem] gap-x-[30rem] flex flex-row items-center">
                    <Header className={"w-full container"} headerMenu={true} />
                </div>

                <div className="flex flex-row border-t-grayVariation2 border-[2rem] h-full">
                    <form
                        className="flex flex-col w-full justify-center items-center bg-grayVariation2"
                        onSubmit={handleSubmit(call)}
                    >
                        <div className="border-[1rem] rounded-[50%] border-black relative z-2 hover:cursor-pointer hover:text-gray-400">
                            <CiUser className="w-[125rem] h-[125rem]" />

                            <PiNotePencil className="absolute bottom-[-10rem] right-[-10rem] z-10 text-[var(--default-purple)]" />
                        </div>

                        <div
                            className={`flex flex-col px-[35rem] w-full gap-y-[20rem] `}
                        >
                            <Input
                                label={"Full Name"}
                                name={"fullName"}
                                register={register}
                                error={errors}
                                placeholder={"John Doe"}
                                errorStyle={"text-sm"}
                            />

                            <Input
                                label={"E-mail"}
                                name={"email"}
                                register={registerWithMask}
                                mask="email"
                                error={errors}
                                placeholder={"John Doe"}
                                errorStyle={"text-sm"}
                            />

                            <Input
                                label={"Phone"}
                                name={"phone"}
                                register={registerWithMask}
                                error={errors}
                                placeholder={"John Doe"}
                                errorStyle={"text-sm"}
                                mask={["+99 [99] 99999-9999"]}
                            />

                            <Input
                                label={"City"}
                                name={"city"}
                                register={register}
                                error={errors}
                                placeholder={"John Doe"}
                                errorStyle={"text-sm"}
                            />

                            <div className="flex flex-row items-center justify-between w-full gap-x-[25rem]">
                                <SelectInput
                                    label={"State"}
                                    name={"state"}
                                    register={register}
                                    error={errors}
                                    divStyle={"w-[50%]"}
                                    placeholder={"Brasil"}
                                    options={states}
                                    errorStyle={"text-sm"}
                                />

                                <Input
                                    label={"Zip Code"}
                                    name={"zipCode"}
                                    register={registerWithMask}
                                    mask={"99999-999"}
                                    error={errors}
                                    divStyle={"w-[50%]"}
                                    placeholder={"John Doe"}
                                    errorStyle={"text-sm"}
                                />
                            </div>

                            <SelectInput
                                label={"Country"}
                                name={"country"}
                                register={register}
                                error={errors}
                                options={countries}
                                placeholder={"John Doe"}
                                errorStyle={"text-sm"}
                            />

                            <div className="flex flex-row items-end justify-end mt-[10rem] gap-x-[25rem]">
                                <Button
                                    children={<p className="text-xl">BACK TO HOME</p>}
                                />
                                <Button
                                    children={<p className="text-xl">SAVE CHANGES</p>}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
