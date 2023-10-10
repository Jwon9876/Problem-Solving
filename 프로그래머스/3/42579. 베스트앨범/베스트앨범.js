const gerne = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

const getGernePlayCount = (g, p) => {
	const gernePlayCountObj = {};
	g.map((v, i) => {
        gernePlayCountObj[g[i]] = (gernePlayCountObj[g[i]] || 0) + p[i]
    })
    const gernePlayCountArr = Object.entries(gernePlayCountObj)
    return gernePlayCountArr;
}

const getPlayCount = (g, p) => {
	const playCountArr = [];
	g.map((v, i) => {
	playCountArr.push({
		index: i,
        gerne: v,
        count:p[i]
        })
    });
    return playCountArr;
}

const getBestAlbum = (gpc, pc) => {
	const bestAlbum = [];
	gpc.forEach((value) => {
		const filtered = pc.reduce((acc, v) => v.gerne == value[0] ? [...acc, v] : [...acc], []).sort((a, b) => b.count - a.count).splice(0, 2)
		bestAlbum.push(filtered)
    })
    return bestAlbum.flat().map((v) => v.index)
}

const solution = (g, p) => {
	const sortedGernePlayCountArr = getGernePlayCount (g, p).sort((a,b)=>b[1]-a[1])
	const playCountArr = getPlayCount(g, p)
	const bestAlbum = getBestAlbum(sortedGernePlayCountArr, playCountArr);
	return getBestAlbum(sortedGernePlayCountArr, playCountArr);
}

