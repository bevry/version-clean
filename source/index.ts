/**
 * Turn a dirty version (such as v1, =1.0.x, >1.0 <2) into a clean version (1.0)
 * @returns the clean version string if possible, otherwise an empty string
 */
export default function versionClean(dirtyVersion: string | number): string {
	let version = String(dirtyVersion)
	// replace everything that isn't relevant with a space, this ensures 1<2 becomes 1 2 rather than 12
	version = version.replace(/[^0-9.]+/g, ' ')
	// replace duplicate dots and trailing dots
	version = version.replace(/\.\.+/g, '.').replace(/\. |\.$/g, ' ')
	// return the first section that is relevant
	const parts = version.split(/ +/)
	for (const part of parts) {
		if (part) return part
	}
	// failed to parse
	return ''
}
