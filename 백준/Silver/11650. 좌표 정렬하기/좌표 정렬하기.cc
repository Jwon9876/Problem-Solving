#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool comp(pair<int, int> a, pair<int, int> b) {
	if (a.first == b.first) return a.second < b.second;
	return a.first < b.first;
}

int main() {

	int n, tmp_a, tmp_b;

	vector <pair <int, int>> v;

	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> tmp_a >> tmp_b;
		v.push_back({ tmp_a, tmp_b });
	}

	sort(v.begin(), v.end(), comp);

	for (int i = 0; i < n; i++) {
		cout << v[i].first << " " << v[i].second << '\n';
	}

	

}