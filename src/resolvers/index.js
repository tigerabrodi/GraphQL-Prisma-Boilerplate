import {extractFragmentReplacements} from "prisma-binding"

import Subscription from "./Subscription"
import Query from './Query'
import Mutation from './Mutation'
import User from './User'

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }