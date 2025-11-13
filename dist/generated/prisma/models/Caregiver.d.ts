import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type CaregiverModel = runtime.Types.Result.DefaultSelection<Prisma.$CaregiverPayload>;
export type AggregateCaregiver = {
    _count: CaregiverCountAggregateOutputType | null;
    _min: CaregiverMinAggregateOutputType | null;
    _max: CaregiverMaxAggregateOutputType | null;
};
export type CaregiverMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    dateOfBirth: Date | null;
    gender: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    street: string | null;
    zipcode: string | null;
    userId: string | null;
};
export type CaregiverMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    dateOfBirth: Date | null;
    gender: string | null;
    phoneNumber: string | null;
    city: string | null;
    state: string | null;
    street: string | null;
    zipcode: string | null;
    userId: string | null;
};
export type CaregiverCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    dateOfBirth: number;
    gender: number;
    phoneNumber: number;
    city: number;
    state: number;
    street: number;
    zipcode: number;
    userId: number;
    _all: number;
};
export type CaregiverMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    dateOfBirth?: true;
    gender?: true;
    phoneNumber?: true;
    city?: true;
    state?: true;
    street?: true;
    zipcode?: true;
    userId?: true;
};
export type CaregiverMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    dateOfBirth?: true;
    gender?: true;
    phoneNumber?: true;
    city?: true;
    state?: true;
    street?: true;
    zipcode?: true;
    userId?: true;
};
export type CaregiverCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    dateOfBirth?: true;
    gender?: true;
    phoneNumber?: true;
    city?: true;
    state?: true;
    street?: true;
    zipcode?: true;
    userId?: true;
    _all?: true;
};
export type CaregiverAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaregiverWhereInput;
    orderBy?: Prisma.CaregiverOrderByWithRelationInput | Prisma.CaregiverOrderByWithRelationInput[];
    cursor?: Prisma.CaregiverWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CaregiverCountAggregateInputType;
    _min?: CaregiverMinAggregateInputType;
    _max?: CaregiverMaxAggregateInputType;
};
export type GetCaregiverAggregateType<T extends CaregiverAggregateArgs> = {
    [P in keyof T & keyof AggregateCaregiver]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCaregiver[P]> : Prisma.GetScalarType<T[P], AggregateCaregiver[P]>;
};
export type CaregiverGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaregiverWhereInput;
    orderBy?: Prisma.CaregiverOrderByWithAggregationInput | Prisma.CaregiverOrderByWithAggregationInput[];
    by: Prisma.CaregiverScalarFieldEnum[] | Prisma.CaregiverScalarFieldEnum;
    having?: Prisma.CaregiverScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CaregiverCountAggregateInputType | true;
    _min?: CaregiverMinAggregateInputType;
    _max?: CaregiverMaxAggregateInputType;
};
export type CaregiverGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    userId: string;
    _count: CaregiverCountAggregateOutputType | null;
    _min: CaregiverMinAggregateOutputType | null;
    _max: CaregiverMaxAggregateOutputType | null;
};
type GetCaregiverGroupByPayload<T extends CaregiverGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CaregiverGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CaregiverGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CaregiverGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CaregiverGroupByOutputType[P]>;
}>>;
export type CaregiverWhereInput = {
    AND?: Prisma.CaregiverWhereInput | Prisma.CaregiverWhereInput[];
    OR?: Prisma.CaregiverWhereInput[];
    NOT?: Prisma.CaregiverWhereInput | Prisma.CaregiverWhereInput[];
    id?: Prisma.StringFilter<"Caregiver"> | string;
    firstName?: Prisma.StringFilter<"Caregiver"> | string;
    lastName?: Prisma.StringFilter<"Caregiver"> | string;
    email?: Prisma.StringFilter<"Caregiver"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Caregiver"> | Date | string;
    gender?: Prisma.StringFilter<"Caregiver"> | string;
    phoneNumber?: Prisma.StringFilter<"Caregiver"> | string;
    city?: Prisma.StringFilter<"Caregiver"> | string;
    state?: Prisma.StringFilter<"Caregiver"> | string;
    street?: Prisma.StringFilter<"Caregiver"> | string;
    zipcode?: Prisma.StringFilter<"Caregiver"> | string;
    userId?: Prisma.StringFilter<"Caregiver"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CaregiverOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CaregiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    userId?: string;
    AND?: Prisma.CaregiverWhereInput | Prisma.CaregiverWhereInput[];
    OR?: Prisma.CaregiverWhereInput[];
    NOT?: Prisma.CaregiverWhereInput | Prisma.CaregiverWhereInput[];
    firstName?: Prisma.StringFilter<"Caregiver"> | string;
    lastName?: Prisma.StringFilter<"Caregiver"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Caregiver"> | Date | string;
    gender?: Prisma.StringFilter<"Caregiver"> | string;
    phoneNumber?: Prisma.StringFilter<"Caregiver"> | string;
    city?: Prisma.StringFilter<"Caregiver"> | string;
    state?: Prisma.StringFilter<"Caregiver"> | string;
    street?: Prisma.StringFilter<"Caregiver"> | string;
    zipcode?: Prisma.StringFilter<"Caregiver"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "email" | "userId">;
export type CaregiverOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.CaregiverCountOrderByAggregateInput;
    _max?: Prisma.CaregiverMaxOrderByAggregateInput;
    _min?: Prisma.CaregiverMinOrderByAggregateInput;
};
export type CaregiverScalarWhereWithAggregatesInput = {
    AND?: Prisma.CaregiverScalarWhereWithAggregatesInput | Prisma.CaregiverScalarWhereWithAggregatesInput[];
    OR?: Prisma.CaregiverScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CaregiverScalarWhereWithAggregatesInput | Prisma.CaregiverScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    dateOfBirth?: Prisma.DateTimeWithAggregatesFilter<"Caregiver"> | Date | string;
    gender?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    state?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    street?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    zipcode?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Caregiver"> | string;
};
export type CaregiverCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    user: Prisma.UserCreateNestedOneWithoutCaregiverInput;
};
export type CaregiverUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    userId: string;
};
export type CaregiverUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCaregiverNestedInput;
};
export type CaregiverUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaregiverCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    userId: string;
};
export type CaregiverUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaregiverUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaregiverNullableScalarRelationFilter = {
    is?: Prisma.CaregiverWhereInput | null;
    isNot?: Prisma.CaregiverWhereInput | null;
};
export type CaregiverCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CaregiverMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CaregiverMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CaregiverCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CaregiverCreateWithoutUserInput, Prisma.CaregiverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CaregiverCreateOrConnectWithoutUserInput;
    connect?: Prisma.CaregiverWhereUniqueInput;
};
export type CaregiverUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CaregiverCreateWithoutUserInput, Prisma.CaregiverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CaregiverCreateOrConnectWithoutUserInput;
    connect?: Prisma.CaregiverWhereUniqueInput;
};
export type CaregiverUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CaregiverCreateWithoutUserInput, Prisma.CaregiverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CaregiverCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CaregiverUpsertWithoutUserInput;
    disconnect?: Prisma.CaregiverWhereInput | boolean;
    delete?: Prisma.CaregiverWhereInput | boolean;
    connect?: Prisma.CaregiverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaregiverUpdateToOneWithWhereWithoutUserInput, Prisma.CaregiverUpdateWithoutUserInput>, Prisma.CaregiverUncheckedUpdateWithoutUserInput>;
};
export type CaregiverUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CaregiverCreateWithoutUserInput, Prisma.CaregiverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CaregiverCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CaregiverUpsertWithoutUserInput;
    disconnect?: Prisma.CaregiverWhereInput | boolean;
    delete?: Prisma.CaregiverWhereInput | boolean;
    connect?: Prisma.CaregiverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaregiverUpdateToOneWithWhereWithoutUserInput, Prisma.CaregiverUpdateWithoutUserInput>, Prisma.CaregiverUncheckedUpdateWithoutUserInput>;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CaregiverCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
};
export type CaregiverUncheckedCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
};
export type CaregiverCreateOrConnectWithoutUserInput = {
    where: Prisma.CaregiverWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaregiverCreateWithoutUserInput, Prisma.CaregiverUncheckedCreateWithoutUserInput>;
};
export type CaregiverUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.CaregiverUpdateWithoutUserInput, Prisma.CaregiverUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CaregiverCreateWithoutUserInput, Prisma.CaregiverUncheckedCreateWithoutUserInput>;
    where?: Prisma.CaregiverWhereInput;
};
export type CaregiverUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.CaregiverWhereInput;
    data: Prisma.XOR<Prisma.CaregiverUpdateWithoutUserInput, Prisma.CaregiverUncheckedUpdateWithoutUserInput>;
};
export type CaregiverUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaregiverUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CaregiverSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    phoneNumber?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caregiver"]>;
export type CaregiverSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    phoneNumber?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caregiver"]>;
export type CaregiverSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    phoneNumber?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caregiver"]>;
export type CaregiverSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    phoneNumber?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    userId?: boolean;
};
export type CaregiverOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "dateOfBirth" | "gender" | "phoneNumber" | "city" | "state" | "street" | "zipcode" | "userId", ExtArgs["result"]["caregiver"]>;
export type CaregiverInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CaregiverIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CaregiverIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CaregiverPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Caregiver";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        dateOfBirth: Date;
        gender: string;
        phoneNumber: string;
        city: string;
        state: string;
        street: string;
        zipcode: string;
        userId: string;
    }, ExtArgs["result"]["caregiver"]>;
    composites: {};
};
export type CaregiverGetPayload<S extends boolean | null | undefined | CaregiverDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CaregiverPayload, S>;
export type CaregiverCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CaregiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CaregiverCountAggregateInputType | true;
};
export interface CaregiverDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Caregiver'];
        meta: {
            name: 'Caregiver';
        };
    };
    findUnique<T extends CaregiverFindUniqueArgs>(args: Prisma.SelectSubset<T, CaregiverFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CaregiverFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CaregiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CaregiverFindFirstArgs>(args?: Prisma.SelectSubset<T, CaregiverFindFirstArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CaregiverFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CaregiverFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CaregiverFindManyArgs>(args?: Prisma.SelectSubset<T, CaregiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CaregiverCreateArgs>(args: Prisma.SelectSubset<T, CaregiverCreateArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CaregiverCreateManyArgs>(args?: Prisma.SelectSubset<T, CaregiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CaregiverCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CaregiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CaregiverDeleteArgs>(args: Prisma.SelectSubset<T, CaregiverDeleteArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CaregiverUpdateArgs>(args: Prisma.SelectSubset<T, CaregiverUpdateArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CaregiverDeleteManyArgs>(args?: Prisma.SelectSubset<T, CaregiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CaregiverUpdateManyArgs>(args: Prisma.SelectSubset<T, CaregiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CaregiverUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CaregiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CaregiverUpsertArgs>(args: Prisma.SelectSubset<T, CaregiverUpsertArgs<ExtArgs>>): Prisma.Prisma__CaregiverClient<runtime.Types.Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CaregiverCountArgs>(args?: Prisma.Subset<T, CaregiverCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CaregiverCountAggregateOutputType> : number>;
    aggregate<T extends CaregiverAggregateArgs>(args: Prisma.Subset<T, CaregiverAggregateArgs>): Prisma.PrismaPromise<GetCaregiverAggregateType<T>>;
    groupBy<T extends CaregiverGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CaregiverGroupByArgs['orderBy'];
    } : {
        orderBy?: CaregiverGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CaregiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CaregiverFieldRefs;
}
export interface Prisma__CaregiverClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CaregiverFieldRefs {
    readonly id: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly firstName: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly lastName: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly email: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Caregiver", 'DateTime'>;
    readonly gender: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly city: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly state: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly street: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly zipcode: Prisma.FieldRef<"Caregiver", 'String'>;
    readonly userId: Prisma.FieldRef<"Caregiver", 'String'>;
}
export type CaregiverFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where: Prisma.CaregiverWhereUniqueInput;
};
export type CaregiverFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where: Prisma.CaregiverWhereUniqueInput;
};
export type CaregiverFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where?: Prisma.CaregiverWhereInput;
    orderBy?: Prisma.CaregiverOrderByWithRelationInput | Prisma.CaregiverOrderByWithRelationInput[];
    cursor?: Prisma.CaregiverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaregiverScalarFieldEnum | Prisma.CaregiverScalarFieldEnum[];
};
export type CaregiverFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where?: Prisma.CaregiverWhereInput;
    orderBy?: Prisma.CaregiverOrderByWithRelationInput | Prisma.CaregiverOrderByWithRelationInput[];
    cursor?: Prisma.CaregiverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaregiverScalarFieldEnum | Prisma.CaregiverScalarFieldEnum[];
};
export type CaregiverFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where?: Prisma.CaregiverWhereInput;
    orderBy?: Prisma.CaregiverOrderByWithRelationInput | Prisma.CaregiverOrderByWithRelationInput[];
    cursor?: Prisma.CaregiverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaregiverScalarFieldEnum | Prisma.CaregiverScalarFieldEnum[];
};
export type CaregiverCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaregiverCreateInput, Prisma.CaregiverUncheckedCreateInput>;
};
export type CaregiverCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CaregiverCreateManyInput | Prisma.CaregiverCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CaregiverCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    data: Prisma.CaregiverCreateManyInput | Prisma.CaregiverCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CaregiverIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CaregiverUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaregiverUpdateInput, Prisma.CaregiverUncheckedUpdateInput>;
    where: Prisma.CaregiverWhereUniqueInput;
};
export type CaregiverUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CaregiverUpdateManyMutationInput, Prisma.CaregiverUncheckedUpdateManyInput>;
    where?: Prisma.CaregiverWhereInput;
    limit?: number;
};
export type CaregiverUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaregiverUpdateManyMutationInput, Prisma.CaregiverUncheckedUpdateManyInput>;
    where?: Prisma.CaregiverWhereInput;
    limit?: number;
    include?: Prisma.CaregiverIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CaregiverUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where: Prisma.CaregiverWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaregiverCreateInput, Prisma.CaregiverUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CaregiverUpdateInput, Prisma.CaregiverUncheckedUpdateInput>;
};
export type CaregiverDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
    where: Prisma.CaregiverWhereUniqueInput;
};
export type CaregiverDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaregiverWhereInput;
    limit?: number;
};
export type CaregiverDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaregiverSelect<ExtArgs> | null;
    omit?: Prisma.CaregiverOmit<ExtArgs> | null;
    include?: Prisma.CaregiverInclude<ExtArgs> | null;
};
export {};
