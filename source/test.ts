import { equal, errorEqual } from 'assert-helpers'
import kava from 'kava'

import versionClean from './index.js'

const fixtures: Array<[input: number | string, expected: string]> = [
	[1, '1'],
	['1', '1'],
	['1.0', '1.0'],
	['1.0.0', '1.0.0'],
	['1-prerelease', '1'],
	['1.0-prerelease', '1.0'],
	['1.0.0-prerelease', '1.0.0'],
	['1.x', '1'],
	['1.x.x', '1'],
	['1.0.x', '1.0'],
	['>=1', '1'],
	['>=1.0', '1.0'],
	['>=1.0.0', '1.0.0'],
	['>=1.0.0-prerelease', '1.0.0'],
	['>=1 <2', '1'],
	['>=1.0 <2', '1.0'],
	['>=1.0.0 <2', '1.0.0'],
	['>=1.0.0-prerelease <2', '1.0.0'],
	['>=1<2', '1'],
	['>=1.0<2', '1.0'],
	['>=1.0.0<2', '1.0.0'],
	['>=1.0.0-prerelease<2', '1.0.0'],
	['1 || 2', '1'],
	['1.x || 2.x', '1'],
	['1.0.x || 2.0.x', '1.0'],
	['1||2', '1'],
	['1.x||2.x', '1'],
	['1.0.x||2.0.x', '1.0'],
	['=1', '1'],
	['=1.0', '1.0'],
	['=1.0.0', '1.0.0'],
	['v1', '1'],
	['v1.0', '1.0'],
	['v1.0.0', '1.0.0'],
	[' 	>=v1 	<2 	', '1'],
	[' 	>=v1.0 	<2 	', '1.0'],
	[' 	>=v1.0.0 	<2 	', '1.0.0'],
	[' 	>=v1.0.0-prerelease 	<2 	', '1.0.0'],
	['>= v1.0.x-prerelease < 3', '1.0'],
	['>= a b c', ''],
	// invalid
	['4.1.8.', '4.1.8'],
	['4.1.8..', '4.1.8'],
	['4.1.8.a', '4.1.8'],
	['4.1.8.a.', '4.1.8'],
	['4.1.8.xa', '4.1.8'],
	['4.1.8.xa.', '4.1.8'],
	['4.1.8.a.x', '4.1.8'],
	['4.1.8.a.x.', '4.1.8'],
]

kava.suite('version-clean', function (suite, test) {
	for (const [input, expected] of fixtures) {
		const name = `versionClean(${JSON.stringify(input)}, ${JSON.stringify(
			input
		)} = ${JSON.stringify(expected)}`
		test(name, function () {
			equal(versionClean(input), expected)
		})
	}
})
