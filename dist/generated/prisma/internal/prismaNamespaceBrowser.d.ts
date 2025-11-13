import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Caregiver: "Caregiver";
    readonly AdultHomeRepresentative: "AdultHomeRepresentative";
    readonly AdultHome: "AdultHome";
    readonly Role: "Role";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CaregiverScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly dateOfBirth: "dateOfBirth";
    readonly gender: "gender";
    readonly phoneNumber: "phoneNumber";
    readonly city: "city";
    readonly state: "state";
    readonly street: "street";
    readonly zipcode: "zipcode";
    readonly userId: "userId";
};
export type CaregiverScalarFieldEnum = (typeof CaregiverScalarFieldEnum)[keyof typeof CaregiverScalarFieldEnum];
export declare const AdultHomeRepresentativeScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly phoneNumber: "phoneNumber";
    readonly jobTitle: "jobTitle";
    readonly userId: "userId";
    readonly adultHomeId: "adultHomeId";
};
export type AdultHomeRepresentativeScalarFieldEnum = (typeof AdultHomeRepresentativeScalarFieldEnum)[keyof typeof AdultHomeRepresentativeScalarFieldEnum];
export declare const AdultHomeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly city: "city";
    readonly state: "state";
    readonly street: "street";
    readonly zipcode: "zipcode";
    readonly website: "website";
};
export type AdultHomeScalarFieldEnum = (typeof AdultHomeScalarFieldEnum)[keyof typeof AdultHomeScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
