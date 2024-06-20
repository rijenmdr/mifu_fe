"use client"

import { Button, Card, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { InfluencerCampaignForm } from '../../../../lib/api'
import { capitalize, getInputType, getSocialMediaIcon } from '@/helper'
import { AtSignIcon } from '@chakra-ui/icons'

type Props = {
    formFields: InfluencerCampaignForm
}

const CampaignForm = ({ formFields }: Props) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const emailValidation = {
        required: 'Email is required',
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address',
        },
    };

    const phoneValidation = {
        required: 'Phone number is required',
        pattern: {
            value: /^[0-9]{10}$/,
            message: 'Phone number must be 10 digits',
        },
    };

    const onSubmit = (data: unknown) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card px={"16px"} py={"20px"} w={{ base: "100%", lg: "850px" }} mb={4}>
                <Text as={"h6"} fontSize={"18px"} fontWeight={"bold"} color={"dark-blue"} mb={"24px"}>
                    Apply Now
                </Text>

                {
                    formFields?.default_fields &&
                        formFields?.default_fields?.length ?
                        formFields?.default_fields?.map(defaultField => {
                            const type = getInputType(defaultField);
                            const validation = defaultField === 'email' ? emailValidation : defaultField === 'phone' ? phoneValidation : { required: `${capitalize(defaultField)} is required` }

                            return (
                                <FormControl key={defaultField} isInvalid={!!errors[defaultField]} mb={4}>
                                    <FormLabel htmlFor='name'>{defaultField}</FormLabel>
                                    <Input
                                        id={defaultField}
                                        type={type}
                                        placeholder={`Enter ${capitalize(defaultField)}`}
                                        {...register(defaultField, validation)}
                                    />
                                    <FormErrorMessage>
                                        {errors?.[defaultField] && (errors?.[defaultField]?.message as string)}
                                    </FormErrorMessage>
                                </FormControl>
                            )
                        }) : null
                }

                {
                    formFields?.socials &&
                        formFields?.socials?.length ?
                        <>
                            <FormLabel>Your Socials</FormLabel>
                            {
                                formFields?.socials?.map(social => (
                                    <FormControl key={social} isInvalid={!!errors[social]} mb={4}>
                                        <Flex gap={"16px"} align={"center"}>
                                            <Image
                                                src={getSocialMediaIcon(social)}
                                                alt={social}
                                                width={40}
                                                height={40}
                                                objectFit='contain'
                                            />
                                            <InputGroup display={"flex"} flexDirection={"column"}>
                                                <InputLeftElement pointerEvents='none'>
                                                    <AtSignIcon color='black' />
                                                </InputLeftElement>
                                                <Input
                                                    id={social}
                                                    placeholder={`${capitalize(social)} Username`}
                                                    {...register(social, {
                                                        required: `${capitalize(social)} username is required`,
                                                    })}
                                                    h={"48px"}
                                                />
                                                <FormErrorMessage>
                                                    {errors?.[social] && (errors?.[social]?.message as string)}
                                                </FormErrorMessage>
                                            </InputGroup>

                                        </Flex>
                                    </FormControl>
                                ))
                            }
                        </> : null
                }

                {
                    formFields?.custom_fields &&
                        formFields?.custom_fields?.length ?
                        formFields?.custom_fields?.map(customField => (
                            <FormControl key={customField?.name} isInvalid={!!errors[customField?.name]} mb={4}>
                                <FormLabel htmlFor='name'>{customField?.question}</FormLabel>
                                <Input
                                    id={customField?.name}
                                    placeholder={`Your Answer`}
                                    {...register(customField?.name, {
                                        required: customField["is_required"] ? `This field is required` : false,
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors?.[customField?.name] && (errors?.[customField?.name]?.message as string)}
                                </FormErrorMessage>
                            </FormControl>
                        )) : null
                }
            </Card>

            <Flex justifyContent={"flex-end"}>
                <Button
                    type='submit'
                    isLoading={isSubmitting}
                >
                    Submit
                </Button>
            </Flex>
        </form>
    )
}

export default CampaignForm
