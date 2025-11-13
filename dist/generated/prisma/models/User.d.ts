import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    username: string;
    password: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    caregiver?: Prisma.XOR<Prisma.CaregiverNullableScalarRelationFilter, Prisma.CaregiverWhereInput> | null;
    adultHomeRepresentative?: Prisma.XOR<Prisma.AdultHomeRepresentativeNullableScalarRelationFilter, Prisma.AdultHomeRepresentativeWhereInput> | null;
    roles?: Prisma.RoleListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    caregiver?: Prisma.CaregiverOrderByWithRelationInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeOrderByWithRelationInput;
    roles?: Prisma.RoleOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    username?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    caregiver?: Prisma.XOR<Prisma.CaregiverNullableScalarRelationFilter, Prisma.CaregiverWhereInput> | null;
    adultHomeRepresentative?: Prisma.XOR<Prisma.AdultHomeRepresentativeNullableScalarRelationFilter, Prisma.AdultHomeRepresentativeWhereInput> | null;
    roles?: Prisma.RoleListRelationFilter;
}, "id" | "username">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
};
export type UserCreateInput = {
    id?: string;
    username: string;
    password: string;
    caregiver?: Prisma.CaregiverCreateNestedOneWithoutUserInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeCreateNestedOneWithoutUserInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    username: string;
    password: string;
    caregiver?: Prisma.CaregiverUncheckedCreateNestedOneWithoutUserInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUncheckedCreateNestedOneWithoutUserInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    caregiver?: Prisma.CaregiverUpdateOneWithoutUserNestedInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUpdateOneWithoutUserNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    caregiver?: Prisma.CaregiverUncheckedUpdateOneWithoutUserNestedInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUncheckedUpdateOneWithoutUserNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    username: string;
    password: string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type UserCreateNestedOneWithoutCaregiverInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCaregiverInput, Prisma.UserUncheckedCreateWithoutCaregiverInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCaregiverInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCaregiverNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCaregiverInput, Prisma.UserUncheckedCreateWithoutCaregiverInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCaregiverInput;
    upsert?: Prisma.UserUpsertWithoutCaregiverInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCaregiverInput, Prisma.UserUpdateWithoutCaregiverInput>, Prisma.UserUncheckedUpdateWithoutCaregiverInput>;
};
export type UserCreateNestedOneWithoutAdultHomeRepresentativeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdultHomeRepresentativeInput, Prisma.UserUncheckedCreateWithoutAdultHomeRepresentativeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdultHomeRepresentativeInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdultHomeRepresentativeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdultHomeRepresentativeInput, Prisma.UserUncheckedCreateWithoutAdultHomeRepresentativeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdultHomeRepresentativeInput;
    upsert?: Prisma.UserUpsertWithoutAdultHomeRepresentativeInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdultHomeRepresentativeInput, Prisma.UserUpdateWithoutAdultHomeRepresentativeInput>, Prisma.UserUncheckedUpdateWithoutAdultHomeRepresentativeInput>;
};
export type UserCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutRolesInput | Prisma.UserUpsertWithWhereUniqueWithoutRolesInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutRolesInput | Prisma.UserUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutRolesInput | Prisma.UserUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutRolesInput | Prisma.UserUpsertWithWhereUniqueWithoutRolesInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutRolesInput | Prisma.UserUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutRolesInput | Prisma.UserUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateWithoutCaregiverInput = {
    id?: string;
    username: string;
    password: string;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeCreateNestedOneWithoutUserInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
};
export type UserUncheckedCreateWithoutCaregiverInput = {
    id?: string;
    username: string;
    password: string;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUncheckedCreateNestedOneWithoutUserInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
};
export type UserCreateOrConnectWithoutCaregiverInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCaregiverInput, Prisma.UserUncheckedCreateWithoutCaregiverInput>;
};
export type UserUpsertWithoutCaregiverInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCaregiverInput, Prisma.UserUncheckedUpdateWithoutCaregiverInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCaregiverInput, Prisma.UserUncheckedCreateWithoutCaregiverInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCaregiverInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCaregiverInput, Prisma.UserUncheckedUpdateWithoutCaregiverInput>;
};
export type UserUpdateWithoutCaregiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUpdateOneWithoutUserNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
};
export type UserUncheckedUpdateWithoutCaregiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUncheckedUpdateOneWithoutUserNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UserCreateWithoutAdultHomeRepresentativeInput = {
    id?: string;
    username: string;
    password: string;
    caregiver?: Prisma.CaregiverCreateNestedOneWithoutUserInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
};
export type UserUncheckedCreateWithoutAdultHomeRepresentativeInput = {
    id?: string;
    username: string;
    password: string;
    caregiver?: Prisma.CaregiverUncheckedCreateNestedOneWithoutUserInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
};
export type UserCreateOrConnectWithoutAdultHomeRepresentativeInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdultHomeRepresentativeInput, Prisma.UserUncheckedCreateWithoutAdultHomeRepresentativeInput>;
};
export type UserUpsertWithoutAdultHomeRepresentativeInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdultHomeRepresentativeInput, Prisma.UserUncheckedUpdateWithoutAdultHomeRepresentativeInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdultHomeRepresentativeInput, Prisma.UserUncheckedCreateWithoutAdultHomeRepresentativeInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdultHomeRepresentativeInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdultHomeRepresentativeInput, Prisma.UserUncheckedUpdateWithoutAdultHomeRepresentativeInput>;
};
export type UserUpdateWithoutAdultHomeRepresentativeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    caregiver?: Prisma.CaregiverUpdateOneWithoutUserNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
};
export type UserUncheckedUpdateWithoutAdultHomeRepresentativeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    caregiver?: Prisma.CaregiverUncheckedUpdateOneWithoutUserNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UserCreateWithoutRolesInput = {
    id?: string;
    username: string;
    password: string;
    caregiver?: Prisma.CaregiverCreateNestedOneWithoutUserInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutRolesInput = {
    id?: string;
    username: string;
    password: string;
    caregiver?: Prisma.CaregiverUncheckedCreateNestedOneWithoutUserInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutRolesInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
};
export type UserUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    caregiver?: Prisma.CaregiverUpdateOneWithoutUserNestedInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    caregiver?: Prisma.CaregiverUncheckedUpdateOneWithoutUserNestedInput;
    adultHomeRepresentative?: Prisma.AdultHomeRepresentativeUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserCountOutputType = {
    roles: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    caregiver?: boolean | Prisma.User$caregiverArgs<ExtArgs>;
    adultHomeRepresentative?: boolean | Prisma.User$adultHomeRepresentativeArgs<ExtArgs>;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caregiver?: boolean | Prisma.User$caregiverArgs<ExtArgs>;
    adultHomeRepresentative?: boolean | Prisma.User$adultHomeRepresentativeArgs<ExtArgs>;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        caregiver: Prisma.$CaregiverPayload<ExtArgs> | null;
        adultHomeRepresentative: Prisma.$AdultHomeRepresentativePayload<ExtArgs> | null;
        roles: Prisma.$RolePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        username: string;
        password: string;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    caregiver<T extends Prisma.User$caregiverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$caregiverArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    adultHomeRepresentative<T extends Prisma.User$adultHomeRepresentativeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$adultHomeRepresentativeArgs<ExtArgs>>): Prisma.Prisma__AdultHomeRepresentativeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    roles<T extends Prisma.User$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$caregiverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where?: Prisma.CaregiverWhereInput;
};
export type User$adultHomeRepresentativeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeRepresentativeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeRepresentativeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeRepresentativeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeRepresentativeWhereInput;
};
export type User$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
