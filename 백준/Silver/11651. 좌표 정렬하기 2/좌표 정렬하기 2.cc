#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool comp(pair<int, int> a, pair<int, int> b) {
	if (a.second == b.second) return a.first < b.first;
	return a.second < b.second;
}

int main() {

	ios_base::sync_with_stdio(0);
	cin.sync_with_stdio(false);
	cin.tie(0);

	int n, tmp_a, tmp_b;
	cin >> n;

	vector <pair<int, int>> v;
	for (int i = 0; i < n; i++) {
		cin >> tmp_a >> tmp_b;
		v.push_back({tmp_a, tmp_b});
	}

	sort(v.begin(), v.end(), comp);

	for (int i = 0; i < n; i++) {
		cout << v[i].first << " " << v[i].second << '\n';
	}

	return 0;
}