import '@testing-library/jest-dom'
import { vi } from 'vitest'
declare var global: any
global.LiveSite = {
    init: vi.fn(),
    on: vi.fn(),
}
