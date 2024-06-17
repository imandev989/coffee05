
import DepartmentModel from "@/../../models/Department";
import connectToDB from "../../../../configs/db";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { title } = body;

    // Valid Title ✅

    await DepartmentModel.create({ title });

    return Response.json(
      { message: "Department created successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  connectToDB();
  const departments = await DepartmentModel.find({});
  return Response.json(departments);
}
