import CategoryPage from '@/app/category/[category]/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

describe('CategoryPage', () => {
    it('renders a heading', () => {
        render(<CategoryPage />)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})