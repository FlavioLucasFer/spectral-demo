import { truthy, pattern} from "@stoplight/spectral-functions";

const INTERNAL_REQUIRED_PROPERTIES_RULE = {
	description: "Required properties for internal APIs",
	message: "The property {{property}} is missing",
	severity: "error",
	given: "$.x-api-meta",
	then: {
		field: "audience",
		function: truthy,
	},
};

const AUDIENCE_RULE = {
	description: "Internal APIs must have the field `audience`",
	message: "The values should be one of: `external` | `internal` | `internal-team-only`",
	severity: "error",
	given: "$.x-api-meta",
	then: {
		field: "audience",
		function: pattern,
		functionOptions: {
			match: "^external$|^internal$|^internal-team-only$",
		},
	},
};

const RULES = {
	"internal-required-properties": INTERNAL_REQUIRED_PROPERTIES_RULE,
	"audience": AUDIENCE_RULE,
};

export default {
	rules: RULES,
};
