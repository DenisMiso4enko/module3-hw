export type Facultet = {
    id: number
    faculty: string
    subjects: string[]
    countStudents: number
}

export type Movie = {
    id: number
    title: string
    year: number
    released: string
    runtime: string
    genre: string[]
    director: string
    writer: string
    actors: string[]
    plot: string
    country: string
    poster: string
    imdbRating: number
    imdbVotes: number
    type: string
    boxOffice: string
    production: string
}


// для второго задания
// Протипизировать данные
// каждый фложенный объект и идентичные повторяющиеся свойста вынести в отдельный type/interface
// для описания полей language и genres используйте литеральные типы и объединение (Пример: type Name = 'John' | 'Anna')
type Rating = {
    average: null | number
}
type Schedule = {
    time: string
    days: string[]
}
type Country = {
    [props: string]: string
}
type Network = {
    id: number
    name: string
    country: Country
    officialSite: null | string

}
type Externals = {
    tvrage: null | number
    thetvdb: number
    imdb: string
}
type Image = {
    [props: string]: string
}
type Href = {href: string}
type Links = {
    self: Href
    previousepisode: Href

}
type Show = {
    id: number
    url: string
    name: string
    type: string
    language: "Dutch" | "English"
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: string
    officialSite: null | string
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel: null
    dvdCountry: null
    externals: Externals
    image: Image
    summary: string
    updated: number
    _links: Links
}

export type Shows = {
    score: number
    show: Show
}