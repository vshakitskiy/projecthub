import { readFile } from "fs/promises"
import path from "path"

const GET = async (_req: Request) => {
    const buffer = await readFile(path.join(process.cwd(), "download/projecthub.pptx"))

    return new Response(JSON.stringify({buffer}), {
        headers: {
            "Content-Disposition": "attachment; filename=\"projecthub.pptx\"",
            "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        }
    })
}

export {GET}