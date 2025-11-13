import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type AdultHomeModel = runtime.Types.Result.DefaultSelection<Prisma.$AdultHomePayload>;
export type AggregateAdultHome = {
    _count: AdultHomeCountAggregateOutputType | null;
    _min: AdultHomeMinAggregateOutputType | null;
    _max: AdultHomeMaxAggregateOutputType | null;
};
export type AdultHomeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    city: string | null;
    state: string | null;
    street: string | null;
    zipcode: string | null;
    website: string | null;
};
export type AdultHomeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    city: string | null;
    state: string | null;
    street: string | null;
    zipcode: string | null;
    website: string | null;
};
export type AdultHomeCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    city: number;
    state: number;
    street: number;
    zipcode: number;
    website: number;
    _all: number;
};
export type AdultHomeMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    city?: true;
    state?: true;
    street?: true;
    zipcode?: true;
    website?: true;
};
export type AdultHomeMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    city?: true;
    state?: true;
    street?: true;
    zipcode?: true;
    website?: true;
};
export type AdultHomeCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    city?: true;
    state?: true;
    street?: true;
    zipcode?: true;
    website?: true;
    _all?: true;
};
export type AdultHomeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeWhereInput;
    orderBy?: Prisma.AdultHomeOrderByWithRelationInput | Prisma.AdultHomeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdultHomeCountAggregateInputType;
    _min?: AdultHomeMinAggregateInputType;
    _max?: AdultHomeMaxAggregateInputType;
};
export type GetAdultHomeAggregateType<T extends AdultHomeAggregateArgs> = {
    [P in keyof T & keyof AggregateAdultHome]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdultHome[P]> : Prisma.GetScalarType<T[P], AggregateAdultHome[P]>;
};
export type AdultHomeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeWhereInput;
    orderBy?: Prisma.AdultHomeOrderByWithAggregationInput | Prisma.AdultHomeOrderByWithAggregationInput[];
    by: Prisma.AdultHomeScalarFieldEnum[] | Prisma.AdultHomeScalarFieldEnum;
    having?: Prisma.AdultHomeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdultHomeCountAggregateInputType | true;
    _min?: AdultHomeMinAggregateInputType;
    _max?: AdultHomeMaxAggregateInputType;
};
export type AdultHomeGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website: string | null;
    _count: AdultHomeCountAggregateOutputType | null;
    _min: AdultHomeMinAggregateOutputType | null;
    _max: AdultHomeMaxAggregateOutputType | null;
};
type GetAdultHomeGroupByPayload<T extends AdultHomeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdultHomeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdultHomeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdultHomeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdultHomeGroupByOutputType[P]>;
}>>;
export type AdultHomeWhereInput = {
    AND?: Prisma.AdultHomeWhereInput | Prisma.AdultHomeWhereInput[];
    OR?: Prisma.AdultHomeWhereInput[];
    NOT?: Prisma.AdultHomeWhereInput | Prisma.AdultHomeWhereInput[];
    id?: Prisma.StringFilter<"AdultHome"> | string;
    name?: Prisma.StringFilter<"AdultHome"> | string;
    email?: Prisma.StringFilter<"AdultHome"> | string;
    phone?: Prisma.StringFilter<"AdultHome"> | string;
    city?: Prisma.StringFilter<"AdultHome"> | string;
    state?: Prisma.StringFilter<"AdultHome"> | string;
    street?: Prisma.StringFilter<"AdultHome"> | string;
    zipcode?: Prisma.StringFilter<"AdultHome"> | string;
    website?: Prisma.StringNullableFilter<"AdultHome"> | string | null;
    reps?: Prisma.AdultHomeRepresentativeListRelationFilter;
};
export type AdultHomeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    reps?: Prisma.AdultHomeRepresentativeOrderByRelationAggregateInput;
};
export type AdultHomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.AdultHomeWhereInput | Prisma.AdultHomeWhereInput[];
    OR?: Prisma.AdultHomeWhereInput[];
    NOT?: Prisma.AdultHomeWhereInput | Prisma.AdultHomeWhereInput[];
    name?: Prisma.StringFilter<"AdultHome"> | string;
    phone?: Prisma.StringFilter<"AdultHome"> | string;
    city?: Prisma.StringFilter<"AdultHome"> | string;
    state?: Prisma.StringFilter<"AdultHome"> | string;
    street?: Prisma.StringFilter<"AdultHome"> | string;
    zipcode?: Prisma.StringFilter<"AdultHome"> | string;
    website?: Prisma.StringNullableFilter<"AdultHome"> | string | null;
    reps?: Prisma.AdultHomeRepresentativeListRelationFilter;
}, "id" | "email">;
export type AdultHomeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AdultHomeCountOrderByAggregateInput;
    _max?: Prisma.AdultHomeMaxOrderByAggregateInput;
    _min?: Prisma.AdultHomeMinOrderByAggregateInput;
};
export type AdultHomeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdultHomeScalarWhereWithAggregatesInput | Prisma.AdultHomeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdultHomeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdultHomeScalarWhereWithAggregatesInput | Prisma.AdultHomeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    email?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    city?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    state?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    street?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    zipcode?: Prisma.StringWithAggregatesFilter<"AdultHome"> | string;
    website?: Prisma.StringNullableWithAggregatesFilter<"AdultHome"> | string | null;
};
export type AdultHomeCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string | null;
    reps?: Prisma.AdultHomeRepresentativeCreateNestedManyWithoutAdultHomeInput;
};
export type AdultHomeUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string | null;
    reps?: Prisma.AdultHomeRepresentativeUncheckedCreateNestedManyWithoutAdultHomeInput;
};
export type AdultHomeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reps?: Prisma.AdultHomeRepresentativeUpdateManyWithoutAdultHomeNestedInput;
};
export type AdultHomeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reps?: Prisma.AdultHomeRepresentativeUncheckedUpdateManyWithoutAdultHomeNestedInput;
};
export type AdultHomeCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string | null;
};
export type AdultHomeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdultHomeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdultHomeScalarRelationFilter = {
    is?: Prisma.AdultHomeWhereInput;
    isNot?: Prisma.AdultHomeWhereInput;
};
export type AdultHomeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
};
export type AdultHomeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
};
export type AdultHomeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    zipcode?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
};
export type AdultHomeCreateNestedOneWithoutRepsInput = {
    create?: Prisma.XOR<Prisma.AdultHomeCreateWithoutRepsInput, Prisma.AdultHomeUncheckedCreateWithoutRepsInput>;
    connectOrCreate?: Prisma.AdultHomeCreateOrConnectWithoutRepsInput;
    connect?: Prisma.AdultHomeWhereUniqueInput;
};
export type AdultHomeUpdateOneRequiredWithoutRepsNestedInput = {
    create?: Prisma.XOR<Prisma.AdultHomeCreateWithoutRepsInput, Prisma.AdultHomeUncheckedCreateWithoutRepsInput>;
    connectOrCreate?: Prisma.AdultHomeCreateOrConnectWithoutRepsInput;
    upsert?: Prisma.AdultHomeUpsertWithoutRepsInput;
    connect?: Prisma.AdultHomeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdultHomeUpdateToOneWithWhereWithoutRepsInput, Prisma.AdultHomeUpdateWithoutRepsInput>, Prisma.AdultHomeUncheckedUpdateWithoutRepsInput>;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type AdultHomeCreateWithoutRepsInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string | null;
};
export type AdultHomeUncheckedCreateWithoutRepsInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string | null;
};
export type AdultHomeCreateOrConnectWithoutRepsInput = {
    where: Prisma.AdultHomeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdultHomeCreateWithoutRepsInput, Prisma.AdultHomeUncheckedCreateWithoutRepsInput>;
};
export type AdultHomeUpsertWithoutRepsInput = {
    update: Prisma.XOR<Prisma.AdultHomeUpdateWithoutRepsInput, Prisma.AdultHomeUncheckedUpdateWithoutRepsInput>;
    create: Prisma.XOR<Prisma.AdultHomeCreateWithoutRepsInput, Prisma.AdultHomeUncheckedCreateWithoutRepsInput>;
    where?: Prisma.AdultHomeWhereInput;
};
export type AdultHomeUpdateToOneWithWhereWithoutRepsInput = {
    where?: Prisma.AdultHomeWhereInput;
    data: Prisma.XOR<Prisma.AdultHomeUpdateWithoutRepsInput, Prisma.AdultHomeUncheckedUpdateWithoutRepsInput>;
};
export type AdultHomeUpdateWithoutRepsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdultHomeUncheckedUpdateWithoutRepsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    zipcode?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdultHomeCountOutputType = {
    reps: number;
};
export type AdultHomeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reps?: boolean | AdultHomeCountOutputTypeCountRepsArgs;
};
export type AdultHomeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeCountOutputTypeSelect<ExtArgs> | null;
};
export type AdultHomeCountOutputTypeCountRepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeRepresentativeWhereInput;
};
export type AdultHomeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    website?: boolean;
    reps?: boolean | Prisma.AdultHome$repsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdultHomeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adultHome"]>;
export type AdultHomeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    website?: boolean;
}, ExtArgs["result"]["adultHome"]>;
export type AdultHomeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    website?: boolean;
}, ExtArgs["result"]["adultHome"]>;
export type AdultHomeSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    city?: boolean;
    state?: boolean;
    street?: boolean;
    zipcode?: boolean;
    website?: boolean;
};
export type AdultHomeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "city" | "state" | "street" | "zipcode" | "website", ExtArgs["result"]["adultHome"]>;
export type AdultHomeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reps?: boolean | Prisma.AdultHome$repsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdultHomeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdultHomeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AdultHomeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AdultHomePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdultHome";
    objects: {
        reps: Prisma.$AdultHomeRepresentativePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string;
        city: string;
        state: string;
        street: string;
        zipcode: string;
        website: string | null;
    }, ExtArgs["result"]["adultHome"]>;
    composites: {};
};
export type AdultHomeGetPayload<S extends boolean | null | undefined | AdultHomeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdultHomePayload, S>;
export type AdultHomeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdultHomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdultHomeCountAggregateInputType | true;
};
export interface AdultHomeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdultHome'];
        meta: {
            name: 'AdultHome';
        };
    };
    findUnique<T extends AdultHomeFindUniqueArgs>(args: Prisma.SelectSubset<T, AdultHomeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdultHomeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdultHomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdultHomeFindFirstArgs>(args?: Prisma.SelectSubset<T, AdultHomeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdultHomeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdultHomeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdultHomeFindManyArgs>(args?: Prisma.SelectSubset<T, AdultHomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdultHomeCreateArgs>(args: Prisma.SelectSubset<T, AdultHomeCreateArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdultHomeCreateManyArgs>(args?: Prisma.SelectSubset<T, AdultHomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdultHomeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdultHomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdultHomeDeleteArgs>(args: Prisma.SelectSubset<T, AdultHomeDeleteArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdultHomeUpdateArgs>(args: Prisma.SelectSubset<T, AdultHomeUpdateArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdultHomeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdultHomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdultHomeUpdateManyArgs>(args: Prisma.SelectSubset<T, AdultHomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdultHomeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdultHomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdultHomeUpsertArgs>(args: Prisma.SelectSubset<T, AdultHomeUpsertArgs<ExtArgs>>): Prisma.Prisma__AdultHomeClient<runtime.Types.Result.GetResult<Prisma.$AdultHomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdultHomeCountArgs>(args?: Prisma.Subset<T, AdultHomeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdultHomeCountAggregateOutputType> : number>;
    aggregate<T extends AdultHomeAggregateArgs>(args: Prisma.Subset<T, AdultHomeAggregateArgs>): Prisma.PrismaPromise<GetAdultHomeAggregateType<T>>;
    groupBy<T extends AdultHomeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdultHomeGroupByArgs['orderBy'];
    } : {
        orderBy?: AdultHomeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdultHomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdultHomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdultHomeFieldRefs;
}
export interface Prisma__AdultHomeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reps<T extends Prisma.AdultHome$repsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdultHome$repsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdultHomeRepresentativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdultHomeFieldRefs {
    readonly id: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly name: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly email: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly phone: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly city: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly state: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly street: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly zipcode: Prisma.FieldRef<"AdultHome", 'String'>;
    readonly website: Prisma.FieldRef<"AdultHome", 'String'>;
}
export type AdultHomeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeWhereUniqueInput;
};
export type AdultHomeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeWhereUniqueInput;
};
export type AdultHomeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeWhereInput;
    orderBy?: Prisma.AdultHomeOrderByWithRelationInput | Prisma.AdultHomeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdultHomeScalarFieldEnum | Prisma.AdultHomeScalarFieldEnum[];
};
export type AdultHomeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeWhereInput;
    orderBy?: Prisma.AdultHomeOrderByWithRelationInput | Prisma.AdultHomeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdultHomeScalarFieldEnum | Prisma.AdultHomeScalarFieldEnum[];
};
export type AdultHomeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where?: Prisma.AdultHomeWhereInput;
    orderBy?: Prisma.AdultHomeOrderByWithRelationInput | Prisma.AdultHomeOrderByWithRelationInput[];
    cursor?: Prisma.AdultHomeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdultHomeScalarFieldEnum | Prisma.AdultHomeScalarFieldEnum[];
};
export type AdultHomeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdultHomeCreateInput, Prisma.AdultHomeUncheckedCreateInput>;
};
export type AdultHomeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdultHomeCreateManyInput | Prisma.AdultHomeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdultHomeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    data: Prisma.AdultHomeCreateManyInput | Prisma.AdultHomeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdultHomeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdultHomeUpdateInput, Prisma.AdultHomeUncheckedUpdateInput>;
    where: Prisma.AdultHomeWhereUniqueInput;
};
export type AdultHomeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdultHomeUpdateManyMutationInput, Prisma.AdultHomeUncheckedUpdateManyInput>;
    where?: Prisma.AdultHomeWhereInput;
    limit?: number;
};
export type AdultHomeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdultHomeUpdateManyMutationInput, Prisma.AdultHomeUncheckedUpdateManyInput>;
    where?: Prisma.AdultHomeWhereInput;
    limit?: number;
};
export type AdultHomeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdultHomeCreateInput, Prisma.AdultHomeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdultHomeUpdateInput, Prisma.AdultHomeUncheckedUpdateInput>;
};
export type AdultHomeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
    where: Prisma.AdultHomeWhereUniqueInput;
};
export type AdultHomeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdultHomeWhereInput;
    limit?: number;
};
export type AdultHome$repsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdultHomeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdultHomeSelect<ExtArgs> | null;
    omit?: Prisma.AdultHomeOmit<ExtArgs> | null;
    include?: Prisma.AdultHomeInclude<ExtArgs> | null;
};
export {};
