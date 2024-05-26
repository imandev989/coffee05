import connectToDB from "../../../../configs/db";
import WishlistModel from "../../../../models/WishList";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { user, product } = body;

    //Validation me

    const wish = await WishlistModel.findOne({ user, product });
    if (!wish) {
      await WishlistModel.create({ user, product });
    }

    return Response.json(
      { message: "Product added to WishList Successfully..." },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
