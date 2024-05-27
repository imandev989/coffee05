import { authUser } from "@/utils/serverHelpers";
import connectToDB from "../../../../../configs/db";
import WishlistModel from "../../../../../models/WishList";

export async function DELETE(req, { params }) {
  try {
    connectToDB();
    const user = await authUser();
    if (!user) {
      return Response.json({ message: "Please login first" }, { status: 401 });
    }
    const productID = params.id;
    await WishlistModel.findOneAndDelete({
      user: user._id,
      product: productID,
    });
    return Response.json(
      { message: "Product removed successfully" },
  
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
