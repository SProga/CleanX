import { createAuth } from "@keystone-next/auth";
import { User } from "./schema/User";
import { config, createSchema } from "@keystone-next/keystone/schema";

const databaseURL =
	process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
	maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
	secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
	listKey: "User",
	identityField: "email",
	secretField: "password",
	initFirstItem: {
		fields: ["name", "email", "password"],
		// TODO: Add in initial roles here
	},
});

export default withAuth(
	config({
		// @ts-ignore

		db: {
			adapter: "mongoose",
			url: databaseURL,
		},
		lists: createSchema({
			// Schema items go in here
			User,
		}),
		ui: {
			// Show the UI only for people who pass this test
			isAccessAllowed: ({ session }) => !!session?.data,
		},
	})
);
