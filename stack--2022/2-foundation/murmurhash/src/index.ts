// https://cimi.io/murmurhash3js-revisited/
import * as MurmurHash3 from 'murmurhash3js-revisited'
import stable_stringify from '@offirmo-private/json-stable-stringify'

type TextEncoderConstructor = any
let tec: TextEncoderConstructor | undefined = undefined
function inject_text_encoder(c: any) {
	tec = c
}

function create(TextEncoder: TextEncoderConstructor = tec) {
	if (!TextEncoder)
		throw new Error('@offirmo-private/murmurhash: a textEncoder implementation must be provided!')

	return {
		v3: {
			x64: {
				hash_string_to_128(str: string): string {
					const bytes = new TextEncoder().encode(str)
					return MurmurHash3.x64.hash128(bytes)
				},
				hash_object_to_128(o: Readonly<any>): string {
					const str = stable_stringify(o)
					const bytes = new TextEncoder().encode(str)
					return MurmurHash3.x64.hash128(bytes)
				},
			},
		},
	}
}

export default create
export {
	create,
	inject_text_encoder,

	MurmurHash3,
}
