export interface Table {
    name: string;
    description: string;
    search?: Search;
}

export interface Search {
    type: 'select' | 'number';
}
