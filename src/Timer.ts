export class Timer {
    private NS_PER_SEC = 1e9;
    private MS_PER_NS = 1e6;
    private t0: [number, number] = [0, 0]
    private t1: [number, number] = [0, 0]

    start() {
        this.t0 = process.hrtime();
    }

    end() {
        this.t1 = process.hrtime(this.t0);
    }

    time() {
        return this.t1[0] * this.NS_PER_SEC + this.t1[1] / this.MS_PER_NS
    }

    results() {
        console.log(`Benchmark took ${this.time()} milliseconds`);
    }
}