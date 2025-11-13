"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.RoleScalarFieldEnum = exports.AdultHomeScalarFieldEnum = exports.AdultHomeRepresentativeScalarFieldEnum = exports.CaregiverScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    User: 'User',
    Caregiver: 'Caregiver',
    AdultHomeRepresentative: 'AdultHomeRepresentative',
    AdultHome: 'AdultHome',
    Role: 'Role'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    password: 'password'
};
exports.CaregiverScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    city: 'city',
    state: 'state',
    street: 'street',
    zipcode: 'zipcode',
    userId: 'userId'
};
exports.AdultHomeRepresentativeScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    jobTitle: 'jobTitle',
    userId: 'userId',
    adultHomeId: 'adultHomeId'
};
exports.AdultHomeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    city: 'city',
    state: 'state',
    street: 'street',
    zipcode: 'zipcode',
    website: 'website'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map