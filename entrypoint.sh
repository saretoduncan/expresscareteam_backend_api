#!/bin/sh
pnpm run seed || true
exec pnpm run start:prod