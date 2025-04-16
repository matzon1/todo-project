
import { Filters } from "./Filters"
import { FilterValue } from "../types"

interface Props {
    activeCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    completedCount: number
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({ 
    handleFilterChange,
    filterSelected,
    completedCount = 0,
    onClearCompleted,
    activeCount = 0    
}) => {

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Tareas pendientes
            </span>

            <Filters 
                filterSelected={filterSelected}
                onFilterChange={(handleFilterChange)}
                />

                {
                    completedCount > 0 && (
                        <button
                            className="clear-completed"
                            onClick={onClearCompleted}
                        >
                            Borrar tareas completadas
                        </button>
                    )
                }
        </footer>
    )
}