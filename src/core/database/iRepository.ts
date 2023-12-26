export interface IRepository<T> {
  findAll(): Promise<T[]>
  findById(id: string): Promise<T | null>
  create(data: T): Promise<T>
  save(data: T): Promise<T>
}
