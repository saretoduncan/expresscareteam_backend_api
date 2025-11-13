import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type AdultHomeRepresentativeModel = runtime.Types.Result.DefaultSelection<Prisma.$AdultHomeRepresentativePayload>;
export type AggregateAdultHomeRepresentative = {
    _count: AdultHomeRepresentativeCountAggregateOutputType | null;
    _min: AdultHomeRepresentativeMinAggregateOutputType | null;
    _max: AdultHomeRepresentativeMaxAggregateOutputType | null;
};
export type AdultHomeRepresentativeMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    jobTitle: string | null;
    userId: string | null;
    adultHomeId: string | null;
};
export type AdultHomeRepresentativeMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    jobTitle: string | null;
    userId: string | null;
    adultHomeId: string | null;
};
export type AdultHomeRepresentativeCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    phoneNumber: number;
    jobTitle: number;
    userId: number;
    adultHomeId: number;
    _all: number;
};
export type AdultHomeRepresentativeMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phoneNumber?: true;
    jobTitle?: true;
    userId?: true;
    adultHomeId?: true;
};
export type AdultHomeRepresentativeMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phoneNumber?: true;
    jobTitle?: true;
    userId?: true;
    adultHomeId?: true;
};
export type AdultHomeRepresentativeCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phoneNumber?: true;
    jobTitle?: true;
    userId?: true;
    adultHomeId?: true;
    _all?: true;
};
export type AdultHomeRepresentativeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    orderBy?: Prisma.AdultHomeRepresentativeOrderByWithRelationInput | Prisma.AdultHomeRepresentativeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdultHomeRepresentativeCountAggregateInputType;
    _min?: AdultHomeRepresentativeMinAggregateInputType;
    _max?: AdultHomeRepresentativeMaxAggregateInputType;
};
export type GetAdultHomeRepresentativeAggregateType<T extends AdultHomeRepresentativeAggregateArgs> = {
    [P in keyof T & keyof AggregateAdultHomeRepresentative]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdultHomeRepresentative[P]> : Prisma.GetScalarType<T[P], AggregateAdultHomeRepresentative[P]>;
};
export type AdultHomeRepresentativeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    orderBy?: Prisma.AdultHomeRepresentativeOrderByWithAggregationInput | Prisma.AdultHomeRepresentativeOrderByWithAggregationInput[];
    by: Prisma.AdultHomeRepresentativeScalarFieldEnum[] | Prisma.AdultHomeRepresentativeScalarFieldEnum;
    having?: Prisma.AdultHomeRepresentativeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdultHomeRepresentativeCountAggregateInputType | true;
    _min?: AdultHomeRepresentativeMinAggregateInputType;
    _max?: AdultHomeRepresentativeMaxAggregateInputType;
};
export type AdultHomeRepresentativeGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
    adultHomeId: string;
    _count: AdultHomeRepresentativeCountAggregateOutputType | null;
    _min: AdultHomeRepresentativeMinAggregateOutputType | null;
    _max: AdultHomeRepresentativeMaxAggregateOutputType | null;
};
type GetAdultHomeRepresentativeGroupByPayload<T extends AdultHomeRepresentativeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdultHomeRepresentativeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdultHomeRepresentativeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdultHomeRepresentativeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdultHomeRepresentativeGroupByOutputType[P]>;
}>>;
export type AdultHomeRepresentativeWhereInput = {
    AND?: Prisma.AdultHomeRepresentativeWhereInput | Prisma.AdultHomeRepresentativeWhereInput[];
    OR?: Prisma.AdultHomeRepresentativeWhereInput[];
    NOT?: Prisma.AdultHomeRepresentativeWhereInput | Prisma.AdultHomeRepresentativeWhereInput[];
    id?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    firstName?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    lastName?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    email?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    phoneNumber?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    jobTitle?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    userId?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    adultHomeId?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    adultHome?: Prisma.XOR<Prisma.AdultHomeScalarRelationFilter, Prisma.AdultHomeWhereInput>;
};
export type AdultHomeRepresentativeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    adultHomeId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    adultHome?: Prisma.AdultHomeOrderByWithRelationInput;
};
export type AdultHomeRepresentativeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    userId?: string;
    AND?: Prisma.AdultHomeRepresentativeWhereInput | Prisma.AdultHomeRepresentativeWhereInput[];
    OR?: Prisma.AdultHomeRepresentativeWhereInput[];
    NOT?: Prisma.AdultHomeRepresentativeWhereInput | Prisma.AdultHomeRepresentativeWhereInput[];
    firstName?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    lastName?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    phoneNumber?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    jobTitle?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    adultHomeId?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    adultHome?: Prisma.XOR<Prisma.AdultHomeScalarRelationFilter, Prisma.AdultHomeWhereInput>;
}, "id" | "email" | "userId">;
export type AdultHomeRepresentativeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    adultHomeId?: Prisma.SortOrder;
    _count?: Prisma.AdultHomeRepresentativeCountOrderByAggregateInput;
    _max?: Prisma.AdultHomeRepresentativeMaxOrderByAggregateInput;
    _min?: Prisma.AdultHomeRepresentativeMinOrderByAggregateInput;
};
export type AdultHomeRepresentativeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdultHomeRepresentativeScalarWhereWithAggregatesInput | Prisma.AdultHomeRepresentativeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdultHomeRepresentativeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdultHomeRepresentativeScalarWhereWithAggregatesInput | Prisma.AdultHomeRepresentativeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    email?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    jobTitle?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
    adultHomeId?: Prisma.StringWithAggregatesFilter<"AdultHomeRepresentative"> | string;
};
export type AdultHomeRepresentativeCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    user: Prisma.UserCreateNestedOneWithoutAdultHomeRepresentativeInput;
    adultHome: Prisma.AdultHomeCreateNestedOneWithoutRepsInput;
};
export type AdultHomeRepresentativeUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
    adultHomeId: string;
};
export type AdultHomeRepresentativeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAdultHomeRepresentativeNestedInput;
    adultHome?: Prisma.AdultHomeUpdateOneRequiredWithoutRepsNestedInput;
};
export type AdultHomeRepresentativeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    adultHomeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdultHomeRepresentativeCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
    adultHomeId: string;
};
export type AdultHomeRepresentativeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdultHomeRepresentativeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    adultHomeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdultHomeRepresentativeNullableScalarRelationFilter = {
    is?: Prisma.AdultHomeRepresentativeWhereInput | null;
    isNot?: Prisma.AdultHomeRepresentativeWhereInput | null;
};
export type AdultHomeRepresentativeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    adultHomeId?: Prisma.SortOrder;
};
export type AdultHomeRepresentativeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    adultHomeId?: Prisma.SortOrder;
};
export type AdultHomeRepresentativeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    jobTitle?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    adultHomeId?: Prisma.SortOrder;
};
export type AdultHomeRepresentativeListRelationFilter = {
    every?: Prisma.AdultHomeRepresentativeWhereInput;
    some?: Prisma.AdultHomeRepresentativeWhereInput;
    none?: Prisma.AdultHomeRepresentativeWhereInput;
};
export type AdultHomeRepresentativeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdultHomeRepresentativeCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutUserInput;
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
};
export type AdultHomeRepresentativeUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutUserInput;
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
};
export type AdultHomeRepresentativeUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AdultHomeRepresentativeUpsertWithoutUserInput;
    disconnect?: Prisma.AdultHomeRepresentativeWhereInput | boolean;
    delete?: Prisma.AdultHomeRepresentativeWhereInput | boolean;
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateToOneWithWhereWithoutUserInput, Prisma.AdultHomeRepresentativeUpdateWithoutUserInput>, Prisma.AdultHomeRepresentativeUncheckedUpdateWithoutUserInput>;
};
export type AdultHomeRepresentativeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AdultHomeRepresentativeUpsertWithoutUserInput;
    disconnect?: Prisma.AdultHomeRepresentativeWhereInput | boolean;
    delete?: Prisma.AdultHomeRepresentativeWhereInput | boolean;
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateToOneWithWhereWithoutUserInput, Prisma.AdultHomeRepresentativeUpdateWithoutUserInput>, Prisma.AdultHomeRepresentativeUncheckedUpdateWithoutUserInput>;
};
export type AdultHomeRepresentativeCreateNestedManyWithoutAdultHomeInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput> | Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput[] | Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput[];
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput[];
    createMany?: Prisma.AdultHomeRepresentativeCreateManyAdultHomeInputEnvelope;
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
};
export type AdultHomeRepresentativeUncheckedCreateNestedManyWithoutAdultHomeInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput> | Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput[] | Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput[];
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput[];
    createMany?: Prisma.AdultHomeRepresentativeCreateManyAdultHomeInputEnvelope;
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
};
export type AdultHomeRepresentativeUpdateManyWithoutAdultHomeNestedInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput> | Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput[] | Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput[];
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput[];
    upsert?: Prisma.AdultHomeRepresentativeUpsertWithWhereUniqueWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeUpsertWithWhereUniqueWithoutAdultHomeInput[];
    createMany?: Prisma.AdultHomeRepresentativeCreateManyAdultHomeInputEnvelope;
    set?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    disconnect?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    delete?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    update?: Prisma.AdultHomeRepresentativeUpdateWithWhereUniqueWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeUpdateWithWhereUniqueWithoutAdultHomeInput[];
    updateMany?: Prisma.AdultHomeRepresentativeUpdateManyWithWhereWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeUpdateManyWithWhereWithoutAdultHomeInput[];
    deleteMany?: Prisma.AdultHomeRepresentativeScalarWhereInput | Prisma.AdultHomeRepresentativeScalarWhereInput[];
};
export type AdultHomeRepresentativeUncheckedUpdateManyWithoutAdultHomeNestedInput = {
    create?: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput> | Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput[] | Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput[];
    connectOrCreate?: Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput[];
    upsert?: Prisma.AdultHomeRepresentativeUpsertWithWhereUniqueWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeUpsertWithWhereUniqueWithoutAdultHomeInput[];
    createMany?: Prisma.AdultHomeRepresentativeCreateManyAdultHomeInputEnvelope;
    set?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    disconnect?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    delete?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    connect?: Prisma.AdultHomeRepresentativeWhereUniqueInput | Prisma.AdultHomeRepresentativeWhereUniqueInput[];
    update?: Prisma.AdultHomeRepresentativeUpdateWithWhereUniqueWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeUpdateWithWhereUniqueWithoutAdultHomeInput[];
    updateMany?: Prisma.AdultHomeRepresentativeUpdateManyWithWhereWithoutAdultHomeInput | Prisma.AdultHomeRepresentativeUpdateManyWithWhereWithoutAdultHomeInput[];
    deleteMany?: Prisma.AdultHomeRepresentativeScalarWhereInput | Prisma.AdultHomeRepresentativeScalarWhereInput[];
};
export type AdultHomeRepresentativeCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    adultHome: Prisma.AdultHomeCreateNestedOneWithoutRepsInput;
};
export type AdultHomeRepresentativeUncheckedCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    adultHomeId: string;
};
export type AdultHomeRepresentativeCreateOrConnectWithoutUserInput = {
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutUserInput>;
};
export type AdultHomeRepresentativeUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutUserInput>;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
};
export type AdultHomeRepresentativeUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateWithoutUserInput, Prisma.AdultHomeRepresentativeUncheckedUpdateWithoutUserInput>;
};
export type AdultHomeRepresentativeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    adultHome?: Prisma.AdultHomeUpdateOneRequiredWithoutRepsNestedInput;
};
export type AdultHomeRepresentativeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    adultHomeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdultHomeRepresentativeCreateWithoutAdultHomeInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    user: Prisma.UserCreateNestedOneWithoutAdultHomeRepresentativeInput;
};
export type AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
};
export type AdultHomeRepresentativeCreateOrConnectWithoutAdultHomeInput = {
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput>;
};
export type AdultHomeRepresentativeCreateManyAdultHomeInputEnvelope = {
    data: Prisma.AdultHomeRepresentativeCreateManyAdultHomeInput | Prisma.AdultHomeRepresentativeCreateManyAdultHomeInput[];
    skipDuplicates?: boolean;
};
export type AdultHomeRepresentativeUpsertWithWhereUniqueWithoutAdultHomeInput = {
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedUpdateWithoutAdultHomeInput>;
    create: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedCreateWithoutAdultHomeInput>;
};
export type AdultHomeRepresentativeUpdateWithWhereUniqueWithoutAdultHomeInput = {
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateWithoutAdultHomeInput, Prisma.AdultHomeRepresentativeUncheckedUpdateWithoutAdultHomeInput>;
};
export type AdultHomeRepresentativeUpdateManyWithWhereWithoutAdultHomeInput = {
    where: Prisma.AdultHomeRepresentativeScalarWhereInput;
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateManyMutationInput, Prisma.AdultHomeRepresentativeUncheckedUpdateManyWithoutAdultHomeInput>;
};
export type AdultHomeRepresentativeScalarWhereInput = {
    AND?: Prisma.AdultHomeRepresentativeScalarWhereInput | Prisma.AdultHomeRepresentativeScalarWhereInput[];
    OR?: Prisma.AdultHomeRepresentativeScalarWhereInput[];
    NOT?: Prisma.AdultHomeRepresentativeScalarWhereInput | Prisma.AdultHomeRepresentativeScalarWhereInput[];
    id?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    firstName?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    lastName?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    email?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    phoneNumber?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    jobTitle?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    userId?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
    adultHomeId?: Prisma.StringFilter<"AdultHomeRepresentative"> | string;
};
export type AdultHomeRepresentativeCreateManyAdultHomeInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
};
export type AdultHomeRepresentativeUpdateWithoutAdultHomeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAdultHomeRepresentativeNestedInput;
};
export type AdultHomeRepresentativeUncheckedUpdateWithoutAdultHomeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdultHomeRepresentativeUncheckedUpdateManyWithoutAdultHomeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    jobTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdultHomeRepresentativeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    jobTitle?: boolean;
    userId?: boolean;
    adultHomeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    adultHome?: boolean | Prisma.AdultHomeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adultHomeRepresentative"]>;
export type AdultHomeRepresentativeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    jobTitle?: boolean;
    userId?: boolean;
    adultHomeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    adultHome?: boolean | Prisma.AdultHomeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adultHomeRepresentative"]>;
export type AdultHomeRepresentativeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    jobTitle?: boolean;
    userId?: boolean;
    adultHomeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    adultHome?: boolean | Prisma.AdultHomeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adultHomeRepresentative"]>;
export type AdultHomeRepresentativeSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    jobTitle?: boolean;
    userId?: boolean;
    adultHomeId?: boolean;
};
export type AdultHomeRepresentativeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phoneNumber" | "jobTitle" | "userId" | "adultHomeId", ExtArgs["result"]["adultHomeRepresentative"]>;
export type AdultHomeRepresentativeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    adultHome?: boolean | Prisma.AdultHomeDefaultArgs<ExtArgs>;
};
export type AdultHomeRepresentativeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    adultHome?: boolean | Prisma.AdultHomeDefaultArgs<ExtArgs>;
};
export type AdultHomeRepresentativeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    adultHome?: boolean | Prisma.AdultHomeDefaultArgs<ExtArgs>;
};
export type $AdultHomeRepresentativePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdultHomeRepresentative";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        adultHome: Prisma.$AdultHomePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        jobTitle: string;
        userId: string;
        adultHomeId: string;
    }, ExtArgs["result"]["adultHomeRepresentative"]>;
    composites: {};
};
export type AdultHomeRepresentativeGetPayload<S extends boolean | null | undefined | AdultHomeRepresentativeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload, S>;
export type AdultHomeRepresentativeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdultHomeRepresentativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdultHomeRepresentativeCountAggregateInputType | true;
};
export interface AdultHomeRepresentativeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdultHomeRepresentative'];
        meta: {
            name: 'AdultHomeRepresentative';
        };
    };
    findUnique<T extends AdultHomeRepresentativeFindUniqueArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdultHomeRepresentativeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdultHomeRepresentativeFindFirstArgs>(args?: Prisma.SelectSubset<T, AdultHomeRepresentativeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdultHomeRepresentativeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdultHomeRepresentativeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdultHomeRepresentativeFindManyArgs>(args?: Prisma.SelectSubset<T, AdultHomeRepresentativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdultHomeRepresentativeCreateArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeCreateArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdultHomeRepresentativeCreateManyArgs>(args?: Prisma.SelectSubset<T, AdultHomeRepresentativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdultHomeRepresentativeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdultHomeRepresentativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdultHomeRepresentativeDeleteArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeDeleteArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdultHomeRepresentativeUpdateArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeUpdateArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdultHomeRepresentativeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdultHomeRepresentativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdultHomeRepresentativeUpdateManyArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdultHomeRepresentativeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdultHomeRepresentativeUpsertArgs>(args: Prisma.SelectSubset<T, AdultHomeRepresentativeUpsertArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdultHomeRepresentativeCountArgs>(args?: Prisma.Subset<T, AdultHomeRepresentativeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdultHomeRepresentativeCountAggregateOutputType> : number>;
    aggregate<T extends AdultHomeRepresentativeAggregateArgs>(args: Prisma.Subset<T, AdultHomeRepresentativeAggregateArgs>): Prisma.PrismaPromise<GetAdultHomeRepresentativeAggregateType<T>>;
    groupBy<T extends AdultHomeRepresentativeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdultHomeRepresentativeGroupByArgs['orderBy'];
    } : {
        orderBy?: AdultHomeRepresentativeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdultHomeRepresentativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdultHomeRepresentativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdultHomeRepresentativeFieldRefs;
}
export interface Prisma__AdultHomeRepresentativeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    adultHome<T extends Prisma.AdultHomeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdultHomeDefaultArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdultHomeRepresentativeFieldRefs {
    readonly id: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly firstName: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly lastName: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly email: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly jobTitle: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly userId: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
    readonly adultHomeId: Prisma.FieldRef<"AdultHomeRepresentative", 'String'>;
}
export type AdultHomeRepresentativeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
};
export type AdultHomeRepresentativeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
};
export type AdultHomeRepresentativeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    orderBy?: Prisma.AdultHomeRepresentativeOrderByWithRelationInput | Prisma.AdultHomeRepresentativeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdultHomeRepresentativeScalarFieldEnum | Prisma.AdultHomeRepresentativeScalarFieldEnum[];
};
export type AdultHomeRepresentativeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    orderBy?: Prisma.AdultHomeRepresentativeOrderByWithRelationInput | Prisma.AdultHomeRepresentativeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdultHomeRepresentativeScalarFieldEnum | Prisma.AdultHomeRepresentativeScalarFieldEnum[];
};
export type AdultHomeRepresentativeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    orderBy?: Prisma.AdultHomeRepresentativeOrderByWithRelationInput | Prisma.AdultHomeRepresentativeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdultHomeRepresentativeScalarFieldEnum | Prisma.AdultHomeRepresentativeScalarFieldEnum[];
};
export type AdultHomeRepresentativeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateInput, Prisma.AdultHomeRepresentativeUncheckedCreateInput>;
};
export type AdultHomeRepresentativeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdultHomeRepresentativeCreateManyInput | Prisma.AdultHomeRepresentativeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdultHomeRepresentativeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    data: Prisma.AdultHomeRepresentativeCreateManyInput | Prisma.AdultHomeRepresentativeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdultHomeRepresentativeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdultHomeRepresentativeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateInput, Prisma.AdultHomeRepresentativeUncheckedUpdateInput>;
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
};
export type AdultHomeRepresentativeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateManyMutationInput, Prisma.AdultHomeRepresentativeUncheckedUpdateManyInput>;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    limit?: number;
};
export type AdultHomeRepresentativeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateManyMutationInput, Prisma.AdultHomeRepresentativeUncheckedUpdateManyInput>;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    limit?: number;
    include?: Prisma.AdultHomeRepresentativeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdultHomeRepresentativeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdultHomeRepresentativeCreateInput, Prisma.AdultHomeRepresentativeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdultHomeRepresentativeUpdateInput, Prisma.AdultHomeRepresentativeUncheckedUpdateInput>;
};
export type AdultHomeRepresentativeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeRepresentativeWhereUniqueInput;
};
export type AdultHomeRepresentativeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeRepresentativeWhereInput;
    limit?: number;
};
export type AdultHomeRepresentativeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
};
export {};
