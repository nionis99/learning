export default class Page {
    private pageNumber: number;
    private pageType: string;
    private pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }

    toString() {
        return `here is page ${this.pageType} #${this.pageNumber} it\'s material is ${this.pageMaterial}`
    }
}